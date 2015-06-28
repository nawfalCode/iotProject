"use strict";
// call mongodb driver
var mongoDb = require('mongodb');
// Global DB
var iotDB = null;
//Create Mongo Client
var mongoClient = mongoDb.MongoClient;

//db url and db
var url = 'mongodb://localhost:27017/iotdb';

mongoClient.connect(url, function(err, db) {
    if (err) {
        console.log('Unable to connect to DB');
    } else {
        iot = db;
        console.log('Connect successfully');
        //db.close();
    }

});



/**insters device(s) into a collection
 * @param   {Array}  data           array of objects
 * @param   {Object} db             database
 * @param   {String} collectionName name of collection
 * @returns {Object} error object
 */
function insertDevice(data, db, collectionName) {

    var collection = db.collection(collectionName);
    collection.insert(data, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log('adding %d record done successfully', data.length);
        }

        return (err);

    });
};

/**
 * updates a device information @ by ID
 * @param {Number} deviceId       device ID
 * @param {Object} device         device object
 * @param {Object} db             database object
 * @param {Sting}  collectionName name of the collection
 */
function updateDevice(deviceId, device, db, collectionName) {
    var collection = db.collection(collectionName);
    collection.update({
        devicId: deviceId
    }, devie, function(err, numUpdated) {
        if (err) {
            console.log(err);
        } else if (numUpdated) {
            console.log('Successfully updated %d documents', numUpdated);
        } else {
            console.log('No document found with defined "find" criteria');
        }
        return err;
    })
}



