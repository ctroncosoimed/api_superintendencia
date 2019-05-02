import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PrestadorSchema = new Schema({
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
});

const Prestador = mongoose.model('Prestador', PrestadorSchema);
export default Prestador; 