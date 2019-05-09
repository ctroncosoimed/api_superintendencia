var kue = require('kue'),
  queue = kue.createQueue({
    redis: 'redis://redis'
  });

console.log("KUE CONNECT IN PORT: "+process.env.PORT_KUE);