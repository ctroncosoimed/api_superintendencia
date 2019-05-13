const kue = require('kue')
    , async = require('async')
    , queue = kue.createQueue({ redis: process.env.REDIS_ADDR });

  
const asyncQueue = async.queue((data, callback) => {

  const job = queue.create('prestador', data).save( (err) => {

    if( err ) 
      console.log( `Error in ${job.id} : ${err}` );

    console.log(`Create Job ${job.id} success`);
    callback()
  })
});

asyncQueue.drain = () => {
  console.log(`Proccesando Jobs`);
}

module.exports = {
  savePrestador: function(data){
    data.title = `Procesando : ${data.rut}`;
    asyncQueue.push(data);
  }
}