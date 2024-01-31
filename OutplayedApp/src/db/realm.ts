import * as Realm from "realm-web";
import { AS_APPID } from '$env/static/private';

const app = new Realm.App({ id: AS_APPID });

// console.log("Realm app", app);

export function start_realm() {
    console.log("Starting realm client...")
    // return app.logIn(Realm.Credentials.anonymous());
}

export default app;