//dependencies 
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes')
// app object - module scaffolding
const app = {};


//configuration
app.config = {
    port: 3000,
}


//create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes)
    server.listen(app.config.port, () => {
        console.log('Server running')
    })
}

app.handleReqRes = handleReqRes;

app.createServer()