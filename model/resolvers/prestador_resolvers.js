export default {
  Query: {
    allPrestadores: async (parent, args, { Prestador }) => {

      if(process.env.USE_ONLY_DATABASE == true){

      }else{
        const fetch = require('node-fetch');
        var rut = args.rut
        const result = await fetch(process.env.PRESTADORES_URL+rut+'.json/?auth_key='+process.env.PRESTADORES_APIKEY)
        .then(response => response.json())
        .then(data => {
          return data.prestador
        })
        .catch((e) => {
          console.log(e)
        })
        console.log(result);
        return result
      }

    }
  }
}