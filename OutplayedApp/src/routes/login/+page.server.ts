import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { login_user } from "$lib/server/login";
import bcrypt from "bcrypt";
// import { cookie_options } from "$lib/server/utils";

export const actions: Actions = {
	default: async (event) => {
		const data = await event.request.formData();

		const username = data.get("username")!.toString();
		const password = data.get("password")!.toString();

		const user = await login_user(username, password, event.cookies);
		console.log("finsihsed login_user in login/+page.server.ts");
		return { user: user};
	}
};