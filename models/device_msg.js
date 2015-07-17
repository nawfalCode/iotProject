var mongoose = require('mongoose');

 var Schema = mongoose.Schema;
 var msgSchema = new Schema({
     deviceId:String,
     //Msg Date-Time
     msgDateTime:String,
     //Msg Destination
     msgDestinationId:String,
     //Message ID
     msgId:String,
     //Msg Properties
     msgProperties:{},
     message:String,
     //Anything else
     others:String
  });

module.exports=mongoose.model('Messages',msgSchema);