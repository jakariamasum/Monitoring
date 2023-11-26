//dependencies 
const http = require('http');
const url = require('url')
const { StringDecoder } = require('string_decoder')
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

app.handleReqRes = (req, res) => {
    const parseUrl = url.parse(req.url, true)//returns objects about url
    // console.log(parseUrl)
    const path = parseUrl.pathname;
    const trimedPath = path.replace(/^\/+|\/+$/g, '')//replace the /  with '' i.e /about/next --> about/next 
    const method = req.method.toLowerCase()
    const queryStringObject = parseUrl.query;
    const headerObject = req.headers;

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end()
        console.log(realData)
        res.end('Hello how are you!')
    })
}

app.createServer()