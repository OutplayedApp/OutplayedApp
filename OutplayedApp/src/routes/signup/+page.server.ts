import type { Actions } from './$types';
import { signup_user } from '$lib/server/signup';

export const actions: Actions = {
	signup: async (event) => {
		const data = await event.request.formData();

		const email = data.get("email")!.toString();
		const password = data.get("password")!.toString();
		const username = data.get("username")!.toString();

		// console.log("email", email);
		// console.log("password", password);
		// console.log("username", username);

		await signup_user(email, password, username);

		return {"data": "ok"};
	}
};