import {Client} from "faunadb"

export const fauna = new Client({
    secret: process.env.FAUNADB_KEY_DATA_BASE,
})