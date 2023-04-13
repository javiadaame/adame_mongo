import { Mongo } from "./database"
import * as methods from "methods"

exports("hasConnection", Mongo.hasConnection)

// Methods
exports('find', methods.find);
exports('findAndUpdate', methods.findAndUpdate);

