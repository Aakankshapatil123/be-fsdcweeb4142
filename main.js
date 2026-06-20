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

// read the contents of the file
fs.readFile('./input.txt', 'utf-8', (err, data) => {
    // if err is not null
    // it means that there is some problem reading the
    // contents of the file
    if (err) {
        console.log('Error in reading the contents of the file!');
        console.log(`Error details:`, err);
        return;
    }

    // if the control comes here, it means there are no error
    // in reading the contents of the file.
    // use the data which has the entire content of the file
    // console.log(data);
    // console.log(data.split('\n'));

    let lines = 0;
    data
        .split('\n')
        .forEach((line) => {
            lines++;
        });
    
    console.log(`The file has ${lines} lines`);
});