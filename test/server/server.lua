RegisterCommand("mongotest", function()
    MongoDB.insertOne({
        collection = "users",
        document = {
            name = "NickBlade"
        }
    }, function(err, result)
        if not (err) then
            print(json.encode(result))
        end
    end)
end)
