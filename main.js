/*
    NodeJS: 

        - JavaScript runtime platform built on Chrome's V8 JavaScript engine.
        - Allows developers to run JavaScript on the server side.
        - Provides a rich set of libraries and tools for building scalable and efficient applications.
        - Built-in libraries includes:
            - http: for creating web servers and handling HTTP requests.
            - fs: for working with the file system.
            - path: for handling file paths.

    fs module:

        - Provides an API for interacting with the file system.
        - Allows you to read, write, and manipulate files and directories.

*/

/*
    Let's say a file already exists in some path and we want to read the contents of the file.

    example: input.txt
*/

// import the fs module
const fs = require('fs');

// write contents to the file
// create a file if it doesn't exists
// fs.writeFile('./output.txt', 'welcome', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
// });

fs.appendFile('./output.txt', 'nodejs', (err) => {
    if (err) {
        console.log(err);
        return;
    }
});

//  fs.unlink('./output.txt', (err) => {
//     if (err) {
//         console.log('error deleting the file');
//         console.log(err);
//         return;
//     }

//     console.log('deleted the file');
// });