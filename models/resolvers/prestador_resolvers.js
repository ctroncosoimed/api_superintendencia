var toUpdate = require("../../jobs/process/jobs.js");

export default {
  Query: {
    allPrestadores: async (parent, args, { Prestador }) => {
      var rut = args.rut.replace(/\-./, '')

      if(process.env.USE_ONLY_DATABASE == 1){

      }else{
        const fetch = require('node-fetch');  
        const result = await fetch(process.env.PRESTADORES_URL+rut+'.json/?auth_key='+process.env.PRESTADORES_APIKEY)
        .then(response => response.json())
        .then(data => {
          console.log("true response");
          toUpdate.savePrestador(data.prestador);
          return data.prestador
        })
        .catch((e) => {
          console.log(e)
        })
        return result
      }
    }
  }
}