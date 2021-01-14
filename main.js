// All the 4 are constansts cause I don't plan to be re-assinging them.
const port = 3000,
  http = require('http'),
  httpStatus = require('http-status-codes'),
  /* Next, you use the http variable as a reference to the HTTP module to create a server, using that module’s createServer function, and store the resulting server in a variable called app.*/
  app = http.createServer((request, response) => {
    console.log("Received an incoming request!");
  })