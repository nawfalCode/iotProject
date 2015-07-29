var mongoose=require('mongoose');
var Device=mongoose.model('device');
//var device = require('../models/device_model');
/**
 * Save new device
 * @param {Object} req device information
 * @param {Object} res response object
 */
exports.post = function(req, res) {
        new Device({
            deviceId: req.deviceId,
            deviceType: req.deviceType
        }).save(function(err) {
            console.log(err);
        });
    };
    /**
     * returns all devices
     * @param {[[Type]]} req [[Description]]
     * @param {[[Type]]} res [[Description]]
     */
exports.list = function(req, res) {
    console.log('inside list');
    Device.find(function(err, threads) {
            console.log('inside find');
        console.log(threads);
        //res.send(threads);
        console.log('end listing');
    });
}

exports.show = (function(req, res) {
    Device.findOne({
        deiceId: rq.params.deviceId
    }, function(err, threads) {
        res.send(threads);
    })
});