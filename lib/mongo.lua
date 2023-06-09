local MongoDBObject = exports.adame_mongo
local promise = promise
local Await = Citizen.Await

local function await(fn, params)
    local p = promise.new()
    fn(MongoDBObject, params, function(error, result)
        p:resolve((not error) and result or nil)
    end)
    return Await(p)
end

rawset(_ENV, "MongoDB", setmetatable({
    ObjectId = function()
        return MongoDBObject:ObjectId()
    end
}, {
    __index = function(self, method)
        local fn = MongoDBObject[method]
        if (fn) then
            self[method] = setmetatable({
                await = function(params)
                    return await(fn, params)
                end
            }, {
                __call = function(self, params, cb)
                    return fn(MongoDBObject, params, cb)
                end
            })
        end
        return self[method]
    end
}))
