const   http = require('http'), // Provides HTTP server
        path = require('path'), //Provides utilities for working with file and directory paths
        express = require('express'), //Allows this app to respond HTTP requests, defines the routing and renders back to the required content
        fs = require('fs'), //Allows to work with the file system: read and write
        xmlParse = require('xslt-processor').xmlParse, //Allows to work with XML files
        xlstProcess = require('xslt-processor').xlstProcess, //Allows to utilise XSL transformation
        xml2js = require('xml2js')  //Does XML <> JSON

const router = express();
const server = http.createServer(router);

router.get('/', function (req, res){

    res.writeHead(200, {'Content-Type' : 'text/html'});

    let xml = fs.readFileSync('PaddyCade.xml', 'utf8'),
        xsl = fs.readFileSync('PaddyCade.xsl', 'utf8');

    let doc = xmlParse(xml),
        stylesheet = xmlParse(xsl);

    let result = xsltProcess(doc, stylesheet);

    res.end(result.toString());

});

server.listen(proccess.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    const addr = server.address();
    console.log("Server listening at", addr.address + ":" + addr.port)
});
