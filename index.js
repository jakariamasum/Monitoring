//dependencies 
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes')
const data = require('./lib/data')
// app object - module scaffolding
const app = {};


//configuration
app.config = {
    port: 3000,
}

//create file
data.create('test','newFile',{'name':'Bangladesh','language':'Bangla','currency':'Tk'},(err)=>{
    console.log(err)
})


//create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes)
    server.listen(app.config.port, () => {
        console.log('Server running')
    })
}

app.handleReqRes = handleReqRes;

app.createServer()