## JavaScript Modules

There are two different types of JavaScript modules:

1. CommonJS modules, which are used in Node.js. They use `require()` to import and `module.exports` to export. The file extension for CommonJS modules is typically `.js` or `.cjs`.

2. ES6 modules, which are part of the ECMAScript 2015 standard. They use `import` and `export` statements. The extension for ES6 modules is typically `.mjs` or `.js` (when using the `type="module"` field in `package.json`).

## NPM application setup

- use `npm init` to create a `package.json` file for your project.

## Version Numbering

Version numbers in npm follow the Semantic Versioning (SemVer) format: `MAJOR.MINOR.PATCH`.

- **MAJOR** version is incremented when there are major changes that break backward compatibility.
- **MINOR** version is incremented when new features are added in a backward-compatible manner
- **PATCH** version is incremented when backward-compatible bug fixes are made.

## Using NPM and Managing Packages

- npm: The Node Package Manager (npm) is a tool that allows you to manage and install packages (libraries) for your JavaScript projects. 

- To install a package, you can use the command `npm install <package-name>`. This will add the package to your `node_modules` directory and update your `package.json` file with the dependency.

- To uninstall a package, you can use the command `npm uninstall <package-name>`. This will remove the package from your `node_modules` directory and update your `package.json` file accordingly.

- To update a package, you can use the command `npm update <package-name>`. This will update the package to the latest version that satisfies the version range specified in your `package.json` file.

## Depenencies

- There are two types of dependencies in npm: regular dependencies and devDependencies.
- Regular dependencies are packages that your application needs to run. They are listed under the `dependencies` field in your `package.json` file.
- DevDependencies are packages that are only needed during development, such as testing frameworks or build tools

## Third Party Modules

- There are many third-party modules available on npm that can be used to add functionality to your JavaScript projects. Some popular modules include:
  - `express`: A web application framework for Node.js.
  - `axios`: A promise-based HTTP client for making requests to APIs.
  - `mongoose`: An Object Data Modeling (ODM) library for MongoDB and Node.js.
  - `jsonwebtoken`: A library for creating and verifying JSON Web Tokens (JWTs) for authentication and authorization.
  - `bcrypt`: A library for hashing passwords and comparing hashed passwords for authentication purposes.
  - `morgan`: A HTTP request logger middleware for Node.js.
  - `cors`: A middleware for enabling Cross-Origin Resource Sharing (CORS) in your Node.js applications.
  - `dotenv`: A module that loads environment variables from a `.env` file into `process.env` for use in your application.
  - `body-parser`: A middleware for parsing incoming request bodies in a middleware before your handlers, available under the `req.body` property.
  - `nodemon`: A utility that automatically restarts your Node.js application when file changes in the directory are detected, making development easier.
  - `nodemailer`: A module for sending emails from Node.js applications.
  - `cookie-parser`: A middleware for parsing cookies in incoming requests and making them available under the `req.cookies` property.

## Status Codes

General Format:

- 1xx: Informational responses (which means the request was received and understood) --rarely used in practice.
- 2xx: Successful responses (which means the request was successfully received, understood, and accepted).
- 3xx: Redirection messages (this means that the request needs to be redirected to another URL).
- 4xx: Client error responses (which means that the request contains bad syntax or cannot be fulfilled).
- 5xx: Server error responses (which means that the server failed to fulfill a valid request).

Some Commonly Used Status Codes:

- 200 OK: The request was successful, and the server returned the requested data.
- 201 Created: The request was successful, and the server created a new resource.
- 204 No Content: The request was successful, but there is no content to return.
- 400 Bad Request: The request was invalid or cannot be processed by the server.
- 401 Unauthorized: The request requires authentication, and the client has not provided valid credentials.
- 403 Forbidden: The server understood the request, but the client does not have permission to access the requested resource.
- 404 Not Found: The requested resource could not be found on the server.
- 500 Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.