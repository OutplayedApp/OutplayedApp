import db from './mongo';

export const users = db.collection("Users");