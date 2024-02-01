import app from "../../db/realm";

import bcrypt from "bcrypt";

// import { User_Model } from "./models";
import { email_regexp } from "./utils";

export async function signup_user(
	email: string,
	password: string,
    username: string
): Promise<{ error: string }> {
	const email_error = await verify_email(email);

	if (email_error) {
		return { error: email_error };
	}

	const password_error = verify_password(password);

	if (password_error) {
		return { error: password_error };
	}

	const name_error = verify_username(username);

	if (name_error) {
		return { error: name_error };
	}

	const salt_rounds = 10;
	const hashed_password = await bcrypt.hash(password, salt_rounds);

	try {
        await app.emailPasswordAuth.registerUser({
            email: email,
            password: password,
        });
        return { error: "" };
	} catch (err) {
		return { error: err?.toString() as string };
	}
}

export async function verify_email(email: string): Promise<string> {
	if (!email) {
		return "Email is required.";
	}

	if (!email.match(email_regexp)) {
		return "Please enter a valid email.";
	}

	// const previous_user = await User_Model.findOne({ email });

	// if (previous_user) {
	// 	return "There is already an account with this email.";
	// }

	return "";
}

function verify_password(password: string): string {
	if (!password) {
		return "Password is required.";
	}

	if (password.length < 8) {
		return "Password must be at least 8 characters.";
	}

	return "";
}

export function verify_username(username: string): string {
	if (!username) {
		return "Name is required.";
	}

	if (username.length <= 2) {
		return "Name has to be at least 3 characters.";
	}

    if (username.length >= 16) {
        return "Name has to be less than 16 characters.";
    }

	return "";
}
