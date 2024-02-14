import bcrypt from "bcrypt";
import * as Realm from "realm-web";
// import app from "../../db/realm";
import db from "../../db/mongo";
import type { Cookies } from "@sveltejs/kit";
import { makeid } from "./utils";

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

    if (await bcrypt.compareSync(password, user.password) === false){
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

    console.log("setting cookie");
    cookies.set("logged_user", `${username}-${makeid(16)}`, { path: "/", maxAge: 60 * 60 * 24 * 7 });
    console.log("set cookie");
    console.log(cookies)

    const result = await db.collection("Users").updateOne(filter, updateDoc, options);

    return {"error": "ok"};
}

