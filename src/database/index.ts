import { MongoClient, Db } from "mongodb"
import { DB_URL, DB_NAME, resourceName } from "../config"
import { validate } from "utils"

declare let db: Db

export async function ConnectDB(): Promise<string> {
    const c = new MongoClient(DB_URL)

    await c.connect()
    db = c.db(DB_NAME)
    return `[${resourceName}]: Connection (${DB_NAME})`;
}



ConnectDB().then(console.log).catch(console.error).finally(() => {
    emit('databaseReady')
})

// Database checking
export const Mongo = {
    hasConnection(): boolean {
        return !!db
    },

    getDb() {
        return db
    }
}

