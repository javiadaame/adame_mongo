import { Mongo } from "../index"
import { validate } from "utils"

const db = Mongo.getDb()

// Find method
async function find(collection: string, params: any[]) {
    if (!Mongo.hasConnection) return false

    if (typeof params === 'object') params = [...params]

    if (!params) {
        console.error(
            `Invalid or no params used on find. Collection: ${collection}. If you want to find all documents use findAll()`
        );
        return false
    }

    const dbCollection = db.collection(collection);

    return validate(
        await dbCollection
            .find(...params)
            .toArray()
            .catch((err) => console.error(err.message))
    )
}