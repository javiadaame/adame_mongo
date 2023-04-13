import { MongoClient, Db } from "mongodb"
import { DB_URL, DB_NAME, resourceName } from "../config"
import { validate, logger } from "../utils"

const c = new MongoClient(DB_URL)
let db: Db
let connected: boolean = false;

c.connect().then(() => {
    db = c.db(DB_NAME);
    connected = true;
    logger(`Connected to database ["${DB_NAME}"]`);
}).catch((error: any) => {
    logger(`Error connecting to database "${DB_NAME}": ${error}`, "ERROR");
});


// Database checking
export const Mongo = {
    async waitForConnection() {
        if (!Mongo.isConnected()) {
            await new Promise<void>((resolve) => {
                (function wait() {
                    if (Mongo.isConnected()) {
                        return resolve();
                    }
                    setTimeout(wait);
                })();
            });
        }
    },

    isConnected() {
        return connected
    },

    async getCollection(collectionName: string) {
        if (!Mongo.isConnected()) await Mongo.waitForConnection();
        return db.collection(collectionName);
    }
}

