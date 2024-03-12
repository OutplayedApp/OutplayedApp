import bcrypt from 'bcrypt';
import db from '../../db/mongo';
import { redirect } from '@sveltejs/kit';

export async function authenticateUser(args: any) {

	if (args.path === '/login' || args.path === '/register') {
		return { error: 'ok' };
	}

	const cookie = args.cookies.get('logged_user');
	if (cookie === undefined) {
		console.log('No logged_user cookie found.');
		return null;
	}
	const split = cookie.split('-');
	const username = split[0];
	const token = split[1];

	const userToken = await db
		.collection('Sessions')
		.findOne({ username: username }, { projection: { username: 1, token: 1 } });

	if (userToken === null) {
		console.log(`No token found for ${username}.`);
		args.cookies.delete('logged_user', { path: '/' });
		return { error: 'No token.' };
	}

	if (bcrypt.compareSync(token, userToken.token) === false) {
		console.log(`Incorrect token for ${username}.`);
		await db.collection('Sessions').deleteOne({ username: username });
		args.cookies.delete('logged_user', { path: '/' });
		return { error: 'Incorrect token.' };
	}

	console.log(`${username} is authenticated.`);

	return { error: 'ok' };
}
