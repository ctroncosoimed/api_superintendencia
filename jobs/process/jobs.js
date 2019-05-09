const kue = require('kue')
    , async = require('async')
    , queue = kue.createQueue({ redis: `redis://redis` });

  
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
    asyncQueue.push(data);
  }
}