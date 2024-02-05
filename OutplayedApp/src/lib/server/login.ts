import bcrypt from "bcrypt";
import * as Realm from "realm-web";
import app from "../../db/realm";
import db from "../../db/mongo";

export async function login_user(
	username: string,
	password: string
){
    const user = await get_user(username, password);
    return {"error": "ok"};
}

async function get_user(
	username: string,
	password: string
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
    } else {
        console.log("Password is correct.");
    }

	// const password_is_correct = await bcrypt.compare(
	// 	password,
	// 	user.password
	// );

	// if (!password_is_correct) {
	// 	return { error: "Password is not correct." };
	// }

	// const id = user._id.toString();

	// const name = user.name;

	// return { id, email, name };
    return {"error": "ok"};
}
