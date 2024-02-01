import { redirect } from '@sveltejs/kit';
import { page } from '$app/stores';
import app from "../../db/realm";


export async function load({params, url}) {
    // pull token and tokenId from query string
    const token = url.searchParams.get('token');
    const tokenId = url.searchParams.get('tokenId');

    if (!token || !tokenId) {
        redirect(302, '/');
    }

    try {
        await app.emailPasswordAuth.confirmUser({ token, tokenId });
        // User email address confirmed.
        console.log("Successfully confirmed user.");
    } catch (err) {
        console.log(`User confirmation failed: ${err}`);
    }

    redirect(302, '/'); // needs `throw` in v1
}