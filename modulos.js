// 1 - importanto módulo nativo do Node.js, utilizando o CommonJs (require())
const os = require('os');

console.log('Hostname:', os.hostname());

// 2 - Módulo personalizado, criado em outro arquivo
const ipv4 = require('./ipv4');

console.log('Ipv4:', ipv4);



