/**
 * Created by Sandeep on 01/06/14.
 */

var Device = require('../models/device_model');
var Msg = require('../models/device_msg');
var express = require('express');

//configure routes


var router = express.Router();

//Msg Routes
router.route('/msg')
    .get(function (req, res) {
        Msg.find(function (err, msgs) {
            if (err)
                res.send(err);
            res.json(msgs)
        })
    })
    //todo: Check for the device ID b4 adding its message
    .post(function (req, res) {
        var msg = new Msg(req.body);
        /**
         * Check if the device is exist
         * On 30/7/02015 @ 12:45am
         */
        Device.find({deviceId: msg.deviceId}, function (err, devices) {
            if ((!err) && (devices.length > 0)) {
                msg.save(function (err) {
                    if (err)
                        res.send(err);
                    res.send({
                        message: 'a new message has bees added'
                    });
                })
            } else {
                res.send({
                    message: 'ID not exist or DB error'
                });
            }
        });
    });

//Device Routes
router.route('/devices')
    .get(function (req, res) {
        Device.find(function (err, devices) {
            if (err)
                res.send(err);
            res.json(devices);
        });
    })

    .post(function (req, res) {
        console.log(req.body);
        //Generate a random ID // This is Temprory // UUID sholf be used
        req.body.deviceId = Math.floor(Math.random() * 100);
        var device = new Device(req.body);

        device.save(function (err) {
            if (err)
                res.send(err);
            res.send({
                message: 'A New Device Has been Added'
            });
        });
    });

router.route('/devices/:id')
    .put(function (req, res) {
        Device.findOne({
            _id: req.params.id
        }, function (err, device) {

            if (err)
                res.send(err);

            for (prop in req.body) {
                device[prop] = req.body[prop];
            }

            // save the device
            device.save(function (err) {
                if (err)
                    res.send(err);

                res.json({
                    message: 'The device has been updated!'
                });
            });

        });
    })

    .get(function (req, res) {
        Device.findOne({
            _id: req.params.id
        }, function (err, device) {
            if (err)
                res.send(err);

            res.json(device);
        });
    })

    .delete(function (req, res) {
        Device.remove({
            _id: req.params.id
        }, function (err, device) {
            if (err)
                res.send(err);

            res.json({
                message: 'Device ...Successfully deleted'
            });
        });
    });

module.exports = router;