// call mongodb driver
var mongoDb = require('mongodb');

// Global DB
var iotDB = null;
var exports = module.exports;

/**
 * connects to database
 * @param   {String} url link to database
 * @returns {Object} db and err objectd
 */
exports.connect = function(url, callfunc) {
    //Create Mongo Client
    console.log('Start conncting');
    var mongoClient = mongoDb.MongoClient;
    mongoClient.connect(url, function(err, db) {
        console.log('got connction');
        if (err) {

            return ({
                db: db,
                err: err
            });

        } else {
            callfunc(db);
            return ({
                db: db,
                err: err
            });
            console.log('Connect successfully');
            //db.close();
        }
    });
};



/**insters device(s) into a collection
 * @param   {Array}  data           array of objects
 * @param   {Object} db             database
 * @param   {String} collectionName name of collection
 * @returns {Object} error object
 */
exports.insertDevice = function(data, db, collectionName) {

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
 * @param   {Number}   deviceId       device ID
 * @param   {Object}   device         device object
 * @param   {Object}   db             database object
 * @param   {Sting}    collectionName name of the collection
 * @returns {Object} error
 */
exports.updateDevice = function(deviceId, device, db, collectionName) {
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


/**
 * get the device Object by ID
 * @param   {Number} deviceId       Device ID
 * @param   {Object} db             Database \
 * @param   {String} collectionName name of the collection
 * @returns {Object} result:array of objects,error Obejct
 */
exports.getDevice = function(deviceId, db, collectionName) {
    var collection = db.collection(collectionName);
    collection.find({
        deviceId: deviceId
    }).toArray(function(err, result) {
        if (err) {
            console.log(err);
            return ({
                result: result,
                error: err
            });
        } else {
            console.log('retrived successfully');
            return ({
                result: result,
                error: err
            });
        }

    })
}