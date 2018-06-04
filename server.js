"use strict";

const http = require("http");
const getQuote = require("./quote");

http.createServer((request, response) => {
  let quote = getQuote();
  console.log("the server is running on port 3000");
  
  response.writeHead(200, { "Content-type": "text/plain" });
  response.write(quote);
  response.end();
}).listen(3000);
