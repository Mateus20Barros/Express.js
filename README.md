![](https://github.com/Mateus20Barros/Express.js/blob/main/assets/nodejs.jpeg) <br>

__``This article to show how to use "ExpressJS" to build routers with "NodeJS".``__ <br><br>

### <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="35" width="45" align="center" /> NodeJS <br>

___Node.js is a server-side platform built on Google Chrome's JavaScript Engine V8 Engine. It was developed by Ryan Dahl in 2009.
It's an open source, cross-platform runtime environment for developing server-side and networking applications.
Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux. <br><br>
📜 You can see [Node JS Docs](https://nodejs.org/en/docs/guides/) for more informations about that one.___ <br><br>


### 🔥 Express JS <br>

___``ExpressJS`` is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.
It facilitates the rapid development of Node based Web applications.___

* ___Allows to set up middlewares to respond to HTTP Requests.___
* ___Defines a routing table which is used to perform different actions based on HTTP Method and URL.___
* ___Allows to dynamically render HTML Pages based on passing arguments to templates.___ <br><br>

### ⚙️ Express JS install <br>

___Firstly, install the ``ExpressJS`` framework globally using ``NPM`` so that it can be used to create a web application using node terminal.___

```bash
$ npm install express
```

___The above command saves the installation locally in the ``node_modules`` directory and creates a directory express inside ``node_modules``.
You should install the following important modules along with express.___

* ___``body-parser`` - This is a node.js middleware for handling JSON, Raw, Text and URL encoded form data.___
* ___``cookie-parser`` - Parse Cookie header and populate req.cookies with an object keyed by the cookie names.___
* ___``multer`` - This is a node.js middleware for handling multipart/form-data.___

```bash
$ npm install body-parser --save
$ npm install cookie-parser --save
$ npm install multer-parser --save
```
<br>

### ⚙️ Nodemon

___``Nodemon`` is a tool that helps develop ``node.js`` based applications by automatically restarting the node application when file changes in the directory are detected.
Install Nodemon by using ``NPM``.___

```bash
$ npm install -g nodemon
```

___And nodemon will be installed globally to your system path. You can also install nodemon as a development dependency:___

```bash
$ npm install --save-dev nodemon
```

___Nodemon wraps your application, so you can pass all the arguments you'll normally pass to your app:___

```bash 
nodemon [your node app]
```
<br>

### 🚀 Express JS Example <br>

___The following code is used to call the express from the ``node_modules folder``, and use the app variable to storage the express.___

```JS
let express = require("express")
let app = express()
```

___After to call the express, we're create the routing, where show us the "Hello World!" on the browser page. later we'll talk more about routing, request and response.___

```JS
app.get("/", (req, res) => {
    res.send("Hello World!")
})
```

___The following code is used to create a server, listen() is used to listen to the server on port 3000.Inside the callback will be checked if the server is working it's print ``console.log("This server is working...")``, otherwise is print ``console.log("error")``.___

```JS
app.listen(3000, (error) => {
    error ? console.log(error) : console.log("This server is working...")
})
```

___Below has the full code.___

```JS
let express = require("express")
let app = express()

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(3000, (error) => {
    error ? console.log(error) : console.log("This server is working...")
})
```

___If you want see he result in the browser page, just put ``localhost:3000`` in the browser navigation bar.___ <br><br>

### 🎲 Request & Response <br>

___Express application uses a callback function whose parameters are request and response objects.___

```JS
app.get("/", (req, res) => {
    // your code here
})
```

* ___``request (req)`` - The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.___
* ___``response (res)`` - The response object represents the HTTP response that an Express app sends when it gets an HTTP request.___


___The following example take the arguments after the ``/home/...``, in this case if the user put the word "Google" or any other word after the last slash, the result is storage in the article variable, and print the value in the browser page. Before the "article" has a colon ``:``, we use that one to get the value, and we also use the ``params`` method to get the value and storage one in the ``article`` variable. ``send()`` method is responsible to send the response to user.___

```JS
app.get("/home/:article", (req, res) => {
    let article = req.params.article
    res.send(`The result is ${article}`)
})
```
<br>

### 🧭 Basic Routing <br>

___We've seen a basic application which serves HTTP request for the homepage. Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI or ``path`` and a specific HTTP request method ``GET``, ``POST``, ``PUT`` and ``DELETE``.___

```JS
let express = require("express")
let app = express()

// Repond with "Hello World" on the homepage.
app.get("/", (req, res) => {
    res.send("Hello World")
})

// respond to POST request on the root router "/", the application's home page.
app.post("/", (req, res) => {
    res.send("Got a POST request")
})

// Respond to a PUT request to the "/user" route.
app.put("/user", (req, res) => {
    res.send("Got a PUT request at /user")
})

// Respond to a DELETE request to the "/user" route.
app.delete("/user", (req, res) => {
    res.send("Got a DELETE request at /user")
})

// Server of the application.
app.listen(3000, (error) => {
    error ? console.log(error) : console.log("This server is working...")
})
```
<br>

___🎯 This ReadMe file is basic about the Express JS, but you can get more information at [Dev docs](https://devdocs.io/express/).___

<br>

<div align="right">
    :octocat: Made by Mateus Barros🏆

</div>
  
---
