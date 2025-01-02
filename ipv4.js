/* 
    Módulo criado por nós para retornar o número do IPV4
*/
const os = require('os');

const adaptadores =  os.networkInterfaces();

const wifi = Object.keys(adaptadores).find(k => k.includes('Wi-Fi') || k.includes('Ethernet'));
//console.log('adaptador-wifi:', wifi /* adaptadores['Wi-Fi 3'] */);

const adaptador = adaptadores[`${wifi}`];
//console.log('adaptadores:', adaptador);

const objIpv4 = adaptador.find(a => a.family === 'IPv4');

/* 
//console.log(`${objIpv4.family}: ${objIpv4.address}`);
objIpv4: {
  address: '192.168.3.201',
  netmask: '255.255.254.0',
  family: 'IPv4',
  mac: '90:65:84:71:d7:16',
  internal: false,
  cidr: '192.168.3.201/23'
}
*/

console.log(objIpv4.address);

module.exports = objIpv4.address;

