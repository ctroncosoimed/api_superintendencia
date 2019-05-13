var kue = require('kue'),
  queue = kue.createQueue({
    redis: 'redis://redis'
  });
kue.app.listen(process.env.PORT_KUE);

console.log("KUE CONNECT IN PORT: "+process.env.PORT_KUE);