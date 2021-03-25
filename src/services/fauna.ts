import { Client } from "faunadb";

export const fauna = new Client({
  secret: process.env.FAUNA_DB_KEY,
});
