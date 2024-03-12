import { start_mongo } from './db/mongo';
import { redirect, type Handle } from '@sveltejs/kit';
import { authenticateUser } from './lib/server/auth';

start_mongo().then(() => {
	console.log('Mongo client started.');
});

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.user = await authenticateUser(event);
	const response = await resolve(event);
	// console.log(response);
	return response;
};
