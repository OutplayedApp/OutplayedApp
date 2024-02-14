import bcrypt from "bcrypt";
import * as Realm from "realm-web";
// import app from "../../db/realm";
import db from "../../db/mongo";
import type { Cookies } from "@sveltejs/kit";
import { makeid } from "./utils";
import { StarHalfStrokeSolid } from "flowbite-svelte-icons";

export async function login_user(
	username: string,
	password: string,
    cookies: Cookies
){
    const user = await get_user(username, password, cookies);
    return {"error": "ok"};
}

async function get_user(
	username: string,
	password: string,
    cookies: Cookies
): Promise<{ error: string }> {
	if (!username) {
		return { error: "Username is required." };
	}

	if (!password) {
		return { error: "Password is required." };
	}

    const user = await db.collection("Users").findOne({ username: username }, { projection: { password: 1} });

    if (!user) {
        return { error: "User not found." };
    }

    if (bcrypt.compareSync(password, user.password) === false){
        return { error: "Password is not correct." };
    }

    const filter = {
        username: username
    };
    const options = { upsert: false};
    const updateDoc = {
        $set: {
            last_login: new Date()
        }
    };
    const lastLoginUpdate = await db.collection("Users").updateOne(filter, updateDoc, options);

    const logged_cookie = makeid(16);
    const salt_rounds = 10;
	const hashed_token = await bcrypt.hash(logged_cookie, salt_rounds);

    filter.username = username;
    options.upsert = true;
    const updateDoc2 = {
        $set: {
            token: hashed_token
        }
    };

    cookies.set("logged_user", `${username}-${logged_cookie}`, { path: "/", maxAge: 60 * 60 * 24 * 7 });
    const sessionCookie = await db.collection("Sessions").updateOne(filter, updateDoc2, options);

    return {"error": "ok"};
}