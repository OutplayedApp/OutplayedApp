import {start_mongo} from "./db/mongo";
import {start_realm} from "./db/realm";

start_mongo().then(() => {
    console.log("Mongo client started.")
})

start_realm();