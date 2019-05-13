var mongoose = require('mongoose');
const fetch = require('node-fetch'); 
var slack_message = require('../config/to_slack');
var Prestador = require('./../models/prestador');
require('../config/mongo');


desc('This is the default task.');
task('carga_medicos', function (params) {
  
  console.log(params);
  

  mongoose.connection.close();
});