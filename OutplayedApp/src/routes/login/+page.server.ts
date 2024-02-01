import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { login_user } from "$lib/server/login";
import bcrypt from "bcrypt";
import app from "../../db/realm";
// import { cookie_options } from "$lib/server/utils";

export const actions: Actions = {
	login: async (event) => {
		// const data = await event.request.formData();

		// const email = (data.get("email") as string)
		// 	?.toLowerCase()
		// 	?.trim();
		// const password = data.get("password") as string;

        // const salt_rounds = 10;
        // const hashed_password = await bcrypt.hash(password, salt_rounds);

		// const user_data = await login_user(email, password);

		// if ("error" in user_data) {
		// 	return fail(400, { email, error: user_data.error });
		// } else {
		// 	// const { token, user } = user_data;

		// // 	event.cookies.set("auth-token", token, cookie_options);
		// // 	event.cookies.set("email", user.email, cookie_options);
		// // 	event.cookies.set("name", user.name, cookie_options);
        //     // console.log("user_data", user_data)
        //     console.log(app.currentUser);
		// 	return { user: "ok"};
		// }
		return { user: "ok"};
	}
};