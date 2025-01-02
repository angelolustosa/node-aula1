const adaptador = {
  'Wi-Fi 3': [
    {
      address: 'fe80::2f34:f543:a1d8:804a',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '90:65:84:71:d7:16',
      internal: false,
      cidr: 'fe80::2f34:f543:a1d8:804a/64',
      scopeid: 6
    },
    {
      address: '192.168.3.201',
      netmask: '255.255.254.0',
      family: 'IPv4',
      mac: '90:65:84:71:d7:16',
      internal: false,
      cidr: '192.168.3.201/23'
    }
  ],
    'Loopback Pseudo-Interface 1': [
      {
        address: '::1',
        netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
        family: 'IPv6',
        mac: '00:00:00:00:00:00',
        internal: true,
        cidr: '::1/128',
        scopeid: 0
      },
      {
        address: '127.0.0.1',
        netmask: '255.0.0.0',
        family: 'IPv4',
        scopeid: 0
      },
      {
        address: '127.0.0.1',
        netmask: '255.0.0.0',
        family: 'IPv4',
        mac: '00:00:00:00:00:00',
        internal: true,
        cidr: '127.0.0.1/8'
      }
    ]
}

const wifi = Object.keys(adaptador).find(a => a.includes('Wi-Fi'))

console.log(adaptador[wifi]);


//console.log(adaptador['Wi-Fi 3'].find(a => a.family === 'IPv4').address);
