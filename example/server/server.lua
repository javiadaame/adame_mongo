RegisterCommand("mongotest", function()
    MongoDB.findOne({
        collection = "users",
        filter = {
            name = "NickBlade"
        }
    }, function(err, result)
        if not (err) then
            print(json.encode(result))
        end
    end)
end)
