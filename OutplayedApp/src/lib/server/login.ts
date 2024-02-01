import bcrypt from "bcrypt";
import * as Realm from "realm-web";
import app from "../../db/realm";


import { email_regexp } from "./utils";
// import { User_Model } from "./models";

export async function login_user(
	email: string,
	password: string
){

    const credentials = Realm.Credentials.emailPassword(email, password);
    const user = await app.logIn(credentials);

    if (!app.currentUser) {
        return { error: "no current user" };
    }
    console.assert(user.id === app.currentUser.id);

    return user;
}

// async function get_user(
// 	email: string,
// 	password: string
// ): Promise<{ error: string } | user> {
// 	if (!email) {
// 		return { error: "Email is required." };
// 	}

// 	if (!email.match(email_regexp)) {
// 		return { error: "Please enter a valid email." };
// 	}

// 	const user = await User_Model.findOne({ email });

// 	if (!user) {
// 		return { error: "Email could not be found." };
// 	}

// 	if (!password) {
// 		return { error: "Password is required." };
// 	}

// 	const password_is_correct = await bcrypt.compare(
// 		password,
// 		user.password
// 	);

// 	if (!password_is_correct) {
// 		return { error: "Password is not correct." };
// 	}

// 	const id = user._id.toString();

// 	const name = user.name;

// 	return { id, email, name };
// }
