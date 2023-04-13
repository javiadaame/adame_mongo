fx_version 'cerulean'
game 'common'

name 'adame-mongo'
description 'Database wrapper for FXServer using MongoDB.'
version '1.0.0'
url 'https://github.com/javiadaame/adame-mongo'
author 'javiadaame'

server_only 'yes'
server_script 'src/database/mongo.js'

convar_category 'Adame-Mongo' {'Config',
                               {{'Database URL', 'database_url', 'CV_STRING', 'mysql://user:password@localhost/database'}},
                               {{'Database Name', 'database_name', 'CV_STRING', 'server'}}}
