const http = require('http');
const url = require('url');
const { parse } = require('querystring');

http.createServer(((req, res) => {
    if(req.method === 'GET') {
        console.log('Method type: ' + req.method);
        console.log(url.parse(req.url, true).query.test);
        res.end('GET REQ ENDS')
    } else if(req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        })
        req.on('end', () => {
            let params = parse(body);
            if(params.age < 18) console.log('minor');
            else console.log('adult');
            console.log(params);
            res.end('ok');
        })
    }
})).listen(3000)