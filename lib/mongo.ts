import { MongoClient, Db } from "mongodb"
import { DB_URL, DB_NAME, resourceName } from "../config"

let db: Db | null = null

async function ConnectDB(): Promise<string> {
    const c = new MongoClient(DB_URL)

    await c.connect()
    db = c.db(DB_NAME)
    return `[Adame-Mongo]: Connection (${DB_NAME})`;
}

ConnectDB().then(console.log).catch(console.error).finally(() => {
    emit('databaseReady')
})

const Mongo = {
    hasConnection(): boolean {
        return !!db
    }
}