"use strict";

const http = require("http");
const quoteList = require("./quote");


http.createServer((request, response) => {
  console.log("the server is running on port 3000");
  
  response.writeHead(200, { "Content-type": "text/plain" });
  response.write(quoteList[Math.floor(Math.random()*quoteList.length)]);
  response.end();
}).listen(3000);
