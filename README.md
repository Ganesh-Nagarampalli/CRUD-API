# CRUD-API

- npm init -y : to create package.json file

- npm i express : to install express

- express : is a web application framework for Node.js

### .gitignore

- use folder/ to ignore an entire folder

- use folder/file or /folder/file to ignore a specific file at the root of the folder

### API testing
- thunder client (vscode extension)

- postman

- insomnia

- curl

### How npm install works?

- When you run npm install, npm looks at the dependencies listed in package.json and installs them in the node_modules folder.

- If you run npm install express ( any package ), npm will install express and its dependencies in the node_modules folder. By fetching the dependencies from the npm registry. Which is a public repository of packages of open-source code for Node.js, front-end web apps, mobile apps, robots, routers, and countless other needs of the JavaScript community.

### Mongoose

- mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

### model

- A model is a class with which we construct documents. In mongoose, each document is an instance of its model.

### Schema

- A Schema is a blueprint of the database which defines the shape of the documents within a collection.

### Middleware

- By default we cannot send json data to the server. To enable this we need to use express.json() middleware.

- Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle.