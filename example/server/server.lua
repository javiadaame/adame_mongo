RegisterCommand("asd", function()
    MongoDB.findOne({
        collection = "users",
        filter = {
            name = "NickBlade"
        }
    }, function(bError, result)
        if not (bError) then
            print(json.encode(result))
        end
    end)
end)
