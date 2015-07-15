 var mongoose = require('mongoose');

        var Schema = mongoose.Schema;
         var deviceSchema = new Schema({
             //Device ID: UUID format
             deviceId: Number,
             // Device description
             deviceDescription: String,
             //List of keywords (string)
             deviceKeywords: Array,
             // List of properties
             deviceProperties: {
                 //location of the device (if possible)
                 location: {
                     longitude: String,
                     latitude: String,
                     accuracy: String
                 },
                 // Type of the device (if applicable)
                 deviceType: String,
                 //anything else
                 others: String
             }
         });
     
     
     //create a model to be used later by the system
     //module.exports= mongoose.model('device', deviceSchema);
module.exports= mongoose.model('Device', deviceSchema);