const   http = require('http'), // Provides HTTP server
        path = require('path'), //Provides utilities for working with file and directory paths
        express = require('express'), //Allows this app to respond HTTP requests, defines the routing and renders back to the required content
        fs = require('fs'), //Allows to work with the file system: read and write
        xmlParse = require('xslt-processor').xmlParse, //Allows to work with XML files
        xlstProcess = require(xslt-processor),xlstProcess, //Allows to utilise XSL transformation
        xml2js = require(xml2js)  //Does XML <> JSON
