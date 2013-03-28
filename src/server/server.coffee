###
    hello world!
###

express = require("express")
path = require("path")
http = require("http")

# ej. some service
# users = require('./routes/users');

app = express()

app.configure ->
    app.set "port", process.env.PORT or 3000
    app.use express.logger("dev") # 'default', 'short', 'tiny', 'dev'
    app.use(express.bodyParser())
    console.log __dirname
    app.use(express.static(path.join(__dirname, "/public")))

# ej. expose service
# app.get '/users', users.findAll

http.createServer(app).listen app.get('port'), -> 
    console.log("Express server listening on port " + app.get('port'))
