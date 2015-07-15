/**
 * Created by Sandeep on 01/06/14.
 */

var Device = require('../models/device_model');
var express = require('express');

//configure routes

var router = express.Router();

router.route('/devices')
    .get(function(req, res) {
        Device.find(function(err, devices) {
            if (err)
                res.send(err);
            res.json(devices);
        });
    })

.post(function(req, res) {
    console.log(req.body);
    req.body.deviceId=Math.random();
    var device = new Device(req.body);

    device.save(function(err) {
        if (err)
            res.send(err);
        res.send({
            message: 'A New Device Has been Added'
        });
    });
});

router.route('/devices/:id')
    .put(function(req, res) {
        Device.findOne({
            _id: req.params.id
        }, function(err, device) {

            if (err)
                res.send(err);

            for (prop in req.body) {
                device[prop] = req.body[prop];
            }

            // save the device
            device.save(function(err) {
                if (err)
                    res.send(err);

                res.json({
                    message: 'The device has been updated!'
                });
            });

        });
    })

.get(function(req, res) {
    Device.findOne({
        _id: req.params.id
    }, function(err, device) {
        if (err)
            res.send(err);

        res.json(device);
    });
})

.delete(function(req, res) {
    Device.remove({
        _id: req.params.id
    }, function(err, device) {
        if (err)
            res.send(err);

        res.json({
            message: 'Device ...Successfully deleted'
        });
    });
});

module.exports = router;