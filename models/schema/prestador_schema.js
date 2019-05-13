export default `
  type Prestador {
    rut: String,
    nombres: String, 
    apellidoPaterno: String,
    apellidoMaterno: String, 
    sexo: String,
    fechaNacimiento: String,
    titulos: String, 
    especialidades: String,
    habilitadoras: String,
    vigencia: String,
    codigoBusqueda: String,
    regionPrestador: String,
    comunaPrestador: String,
    searchRegionTrabajo: String,
    telefonos: String,
    direccion: String,
    email: String,
    estado: String,
    data: String
  }

  type Query {
    allPrestadores(
      rut: String!
      ): Prestador
  }
  
`;