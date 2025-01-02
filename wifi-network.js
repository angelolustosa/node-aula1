const os = require('os');

const adaptadores =  os.networkInterfaces();

//console.log('adaptadores:', );

const interfaces = Object.keys(adaptadores);

console.log(interfaces.find(interface => interface.includes('Wi-Fi') || interface.includes('Ethernet')));
