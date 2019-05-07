var toUpdate = require("../../jobs/process/jobs.js");
var slack_message = require('../../config/to_slack');
const fetch = require('node-fetch'); 

export default {
  Query: {
    allPrestadores: async (parent, args, { Prestador }) => {
      var rut = args.rut.replace(/\-./, '')
  
      switch(process.env.TYPE_SWITCH){

        case "0": // Se conecta directamente a la api y actualiza la base de datos
           
          const result = await fetch(process.env.PRESTADORES_URL+rut+'.json/?auth_key='+process.env.PRESTADORES_APIKEY)
          .then(response => response.json())
          .then(data => {
            console.log("true response");
            toUpdate.savePrestador(data.prestador);
            return data.prestador
          })
          .catch((e) => {
            var mensaje = JSON.parse(JSON.stringify(e));
            slack_message.send_mesage_slack({message: `>>> *Problemas en la API METODO 0* : \n ${mensaje.message}` });
            console.log(mensaje.message);
          })
          return result
          break;
        case "1": // Se conecta directamente a la base de datos 
          
          var result_database = Prestador.findOne({rut: rut}, function(err,obj) {
            return obj
          });

          return result_database

          break;
        case "2": // Se conecta a la base de datos -> api -> actualiza base de datos
        
          var result_database2 = Prestador.findOne({rut: rut}, function(err,obj) {
 
            fetch(process.env.PRESTADORES_URL+rut+'.json/?auth_key='+process.env.PRESTADORES_APIKEY)
            .then(response => response.json())
            .then(data => {
              if(data.prestador != null){
                toUpdate.savePrestador(data.prestador);
              }
            })
            .catch((e) => {
              var mensaje = JSON.parse(JSON.stringify(e));
              slack_message.send_mesage_slack({message: `>>> *Problemas en la API METODO 2* : \n ${mensaje.message}` });
              console.log(mensaje.message);
            })
            
            return obj
          });
          return result_database2

          break;
      }
    }
  }
}