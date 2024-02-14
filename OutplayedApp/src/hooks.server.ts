import {start_mongo} from "./db/mongo";
import { redirect, type Handle } from "@sveltejs/kit"
import { authenticateUser } from "./lib/server/auth";

start_mongo().then(() => {
    console.log("Mongo client started.")
})

// export const handle: Handle = async ({ event, resolve }) => {
// 	// Stage 1
// 	event.locals.user = authenticateUser(event)

// 	if (event.url.pathname.startsWith("/protected")) {
// 		if (!event.locals.user) {
// 			throw redirect(303, "/")
// 		}
// 		if (event.url.pathname.startsWith("/protected/admin")) {
// 			if (event.locals.user.role !== "ADMIN") {
// 				throw redirect(303, "/protected")
// 			}
// 		}
// 	}

// 	const response = await resolve(event) // Stage 2

// 	// Stage 3

// 	return response
// }


export const handle: Handle = async ({ event, resolve }) => {

    console.log("entering hook");

    event.locals.user = await authenticateUser(event);

    // console.log(event.locals.user);

    const response = await resolve(event);

    console.log("exiting hook");
    return response;
}