import bcrypt from "bcrypt";
import db from "../../db/mongo";

export async function authenticateUser( args: any ){
    const cookie = args.cookies.get("logged_user");
    if (cookie === undefined){
        console.log("No logged_user cookie found.");
        return null;
    }
    const split = cookie.split("-");
    const username = split[0];
    const token = split[1];

    const userToken = await db.collection("Sessions").findOne({ username: username }, { projection: { username: 1, token: 1 } });

    if (userToken === null){
        console.log(`No token found for ${username}.`);
        return null;
    }

    if (bcrypt.compareSync(token, userToken.token) === false){
        console.log(`Incorrect token for ${username}.`);
        return null;
    }

    console.log(`${username} is authenticated.`);

    return {error: "ok"};
}