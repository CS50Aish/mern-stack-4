# mern-stack-4
Develop Reliable Backend Projects

labuser@ubuntu2204:~/Desktop/mern-stack-4$ mkdir node
labuser@ubuntu2204:~/Desktop/mern-stack-4$ ls
README.md  node
labuser@ubuntu2204:~/Desktop/mern-stack-4$ cd node/
labuser@ubuntu2204:~/Desktop/mern-stack-4/node$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (node) 
version: (1.0.0) 
description: Node Projects
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: Aishwarya
license: (ISC) 
About to write to /home/labuser/Desktop/mern-stack-4/node/package.json:

{
  "name": "node",
  "version": "1.0.0",
  "description": "Node Projects",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Aishwarya",
  "license": "ISC"
}


Is this OK? (yes) 
npm notice 
npm notice New minor version of npm available! 10.2.4 -> 10.8.2
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.8.2
npm notice Run npm install -g npm@10.8.2 to update!
npm notice 

labuser@ubuntu2204:~/Desktop/mern-stack-4/node$ touch index.js
labuser@ubuntu2204:~/Desktop/mern-stack-4/node$ ls
index.js  package.json
labuser@ubuntu2204:~/Desktop/mern-stack-4/node$ npm install http

added 1 package, and audited 2 packages in 2s

found 0 vulnerabilities

labuser@ubuntu2204:~/Desktop/mern-stack-4/node$ cat package.json
{
  "name": "node",
  "version": "1.0.0",
  "description": "Node Projects",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Aishwarya",
  "license": "ISC",
  "dependencies": {
    "http": "^0.0.1-security"
  }
}

labuser@ubuntu2204:~/Desktop/mern-stack-4/node$ node index.js
Server is up and running on host 127.0.0.1 and listening on port 3000

labuser@ubuntu2204:~/Desktop/mern-stack-4/node-projects/projects$ cd project2
labuser@ubuntu2204:~/Desktop/mern-stack-4/node-projects/projects/project2$ npm init -y
Wrote to /home/labuser/Desktop/mern-stack-4/node-projects/projects/project2/package.json:

{
  "name": "project2",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


labuser@ubuntu2204:~/Desktop/mern-stack-4/node-projects/projects/project2$ npm install express

added 64 packages, and audited 65 packages in 4s

12 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

labuser@ubuntu2204:~/Desktop/mern-stack-4/node-projects/projects$ cd project2
labuser@ubuntu2204:~/Desktop/mern-stack-4/node-projects/projects/project2$ npm init -y
Wrote to /home/labuser/Desktop/mern-stack-4/node-projects/projects/project2/package.json:

{
  "name": "project2",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


labuser@ubuntu2204:~/Desktop/mern-stack-4/node-projects/projects/project2$ npm install express

added 64 packages, and audited 65 packages in 4s

12 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
