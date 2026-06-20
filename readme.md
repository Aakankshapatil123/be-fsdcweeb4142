JavaScript Modules
There are two different types of JavaScript modules:

CommonJS modules, which are used in Node.js. They use require() to import and module.exports to export. The file extension for CommonJS modules is typically .js or .cjs.

ES6 modules, which are part of the ECMAScript 2015 standard. They use import and export statements. The extension for ES6 modules is typically .mjs or .js (when using the type="module" field in package.json).

NPM application setup
use npm init to create a package.json file for your project.
Version Numbering
Version numbers in npm follow the Semantic Versioning (SemVer) format: MAJOR.MINOR.PATCH.

MAJOR version is incremented when there are major changes that break backward compatibility.
MINOR version is incremented when new features are added in a backward-compatible manner
PATCH version is incremented when backward-compatible bug fixes are made.