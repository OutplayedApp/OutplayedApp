import bcrypt from "bcrypt";
import db from "../../db/mongo";

export async function authenticateUser( args: any ){
    if (args.cookies.get("logged_user") === undefined){
        return null;
    }
    console.log(`${args.cookies.get("logged_user")} is the logged user`);
    return args;
}