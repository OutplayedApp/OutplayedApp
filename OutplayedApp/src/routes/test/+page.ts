import { error } from '@sveltejs/kit';

// /** @type {import('./$types').PageServerLoad} */
export async function load() {

    console.log("what the fuck am i doing haha lmao");
    // console.log(event);
    
    return {
        title: "deez",
    }
}