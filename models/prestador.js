var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PrestadorSchema = new Schema({
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
},
{
  timestamps: true
});

var Prestador = mongoose.model('Prestador', PrestadorSchema);
module.exports =  Prestador;