/*
 =====================================================================
 *1 Require the http and http-status-codes modules.
 =====================================================================
 */
// All the 4 are constansts cause I don't plan to be re-assinging them.
const port = 3000,
  http = require('http'),
  httpStatus = require('http-status-codes'),
  /*
 =====================================================================
 *2. Create the server with request and response parameters.
 =====================================================================

 * Next, you use the http variable as a reference to the HTTP module to create a server, using that module’s createServer function, and store the resulting server in a variable called app.

 */
  
  app = http.createServer((request, response) => {
    console.log("Received an incoming request!");
    /*
    * The first line uses a writeHead method to define some basic properties of the response’s HTTP header. HTTP headers contain fields of information that describe the content being transferred in a request or response. Header fields may contain dates, tokens, information about the origins of the request and response, and data describing the type of connection. 
   
    * In this case, you’re returning httpStatus.OK, which represents a 200 response code,   and an HTML content-type to indicate that the server received a request successfully and will return content in the form of HTML.
   
    */
    response.writeHead(httpStatus.OK, {
      "Content-Type": "text/html"
    });

    /*
=====================================================================
*3 Write the response to the client.
=====================================================================

* You’re writing a line of HTML in the response with write and closing the response with end.  
* You must end your response with end to tell the server that you’re no longer writing content.
* Not doing so leaves the connection with the client open, preventing the client from receiving the response.
*/
    let responseMessage = "<h1>Hello Universe!</h1>";
    response.write(responseMessage);
    response.end();
    console.log(`Sent a response : ${responseMessage}`);
  });

  /*
  =======================================================================================
  * 4. Tell the application server to listen on port 3000.
  ========================================================================================

  * The last line of code takes the server instance, app, and runs the listen method to indicate that the server is ready for incoming requests at port 3000.
   */

app.listen(port);
console.log(`The server has started and is listening for port number ${port}`);


