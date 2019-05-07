var mongoose = require('mongoose');

require('../config/mongo');
var slack_message = require('../config/to_slack');
var Prestador = require('./../models/prestador');

desc('This is the default task.');
task('carga_medicos', function (params) {
  
  slack_message.send_mesage_slack({message: 'Error from App Nodejs'})
  mongoose.connection.close();
  
});