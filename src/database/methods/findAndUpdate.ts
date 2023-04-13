import { Mongo } from "../index"
import { validate } from "utils"

const db = Mongo.getDb()

// Find and Update method
async function findAndUpdate(
    collection: string,
    params: object,
    updateParams: object,
    limit: number
) {
    if (!Mongo.hasConnection) return false;
    if (typeof params === 'object') params = [...params];

    if (!params) {
        console.error(
            `Invalid or no params used on find. Collection: ${collection}. If you want to find all documents use findAll()`
        );
        return false;
    }

    const ids: string[] = [];

    const dbCollection = db.collection(collection);
    await dbCollection
        .find(...params)
        .limit(limit)
        .forEach((e: { _id: string }) => {
            ids.push(e._id);
        });

    return await dbCollection.updateMany(
        { _id: { $in: ids } },
        { $set: updateParams }
    );
};
