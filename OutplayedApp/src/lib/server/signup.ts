import app from "../../db/realm";
import db from "../../db/mongo";

import bcrypt from "bcrypt";

import { email_regexp } from "./utils";

import { writable } from "svelte/store";

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

	const name_error = await verify_username(username);

	if (name_error) {
		return { error: name_error };
	}

	const salt_rounds = 10;
	const hashed_password = await bcrypt.hash(password, salt_rounds);

	try {
		await put_user(username, email, hashed_password);
        return { error: "ok" };
	} catch (err) {
		return { error: err?.toString() as string };
	}
}

export async function verify_email(email: string): Promise<string> {
	if (!email) {
		return "Email is required.";
	}

	const users = db.collection("Users");
	const res = await users.find({}, { projection: {
		email: 1,
	}}).toArray();
	for(let user of res){
		if (user.email === email) {
			return "Email already exists.";
		}
	}
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

export async function verify_username(username: string): Promise<string> {
	if (!username) {
		return "Name is required.";
	}

	if (username.length <= 2) {
		return "Name has to be at least 3 characters.";
	}

    if (username.length >= 16) {
        return "Name has to be less than 16 characters.";
    }

	const users = db.collection("Users");
	const res = await users.find({}, { projection: {
		username: 1,
	}}).toArray();
	for(let user of res){
		if (user.username === username) {
			return "Username already exists.";
		}
	}
	return "";
}

async function put_user(
	username: string,
	email: string,
	password: string
): Promise<void> {
	const users = db.collection("Users");
	const res = await users.insertOne({
		username: username,
		email: email,
		password: password,
		last_login: new Date(),
	});
}