var kue = require('kue')
 , queue = kue.createQueue({ redis: `redis://redis` }); 

require('../../config/mongo.js');

//mongodb models
var Prestador =  require('../../models/prestador'); 

// Process
queue.process('prestador', (job, done) => {

  console.log(" |> Procesando el RUT : "+job.data.rut);

  update_prestador(job.data, (err) => {
    if (err){
      console.log(`Proces job ${job.id} error: ${err} !!!`);
      done(err);
    }else{
      console.log(`Proces job ${job.id} success`)
      done();
    }
  });
}, 1);

const update_prestador = (prestador, callback) => {
  console.log(` |>> Procesando ${prestador.rut}`);
  const search = Prestador.find({rut: prestador.rut});
  search.then(function(result) {
    if(result != ''){
      search
      .updateOne(prestador)
        .then(function(resultado){
          if(resultado.nModified == 0){
            console.log(resultado.nModified+"|>>> No se actualizo ninguna fila");
          }else{
            console.log(resultado.nModified+"|>>> Actualizado correctamente ");
          }
      })
      .catch((err) => {
        console.log('Error: ' + err);
      })
    }else{
      console.log(`Rut ${prestador.rut} Se guardara en la base de datos.`);
      Prestador.create(prestador).then(function(result) {
        console.log(` |>>> El rut ${prestador.rut} fue guardado en la base de datos.`);
      }).catch(function(err){
        callback(err);
      })
    }
  })
  callback(null)
}