import * as Realm from "realm-web";
import { AS_APPID } from '$env/static/private';

const app = new Realm.App({ id: AS_APPID });

export default app;