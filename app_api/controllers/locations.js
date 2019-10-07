const mongoose = require('mongoose');
const Loc = mongoose.model('Locations');

const locationsListByDistance = (res,req) =>{ 
    res
    .status(200)
    .json({"status":"success"});
 };
const locationsCreate =(res,req) => { 
    res
    .status(200)
    .json({"status":"success"});
 };
const locationsReadOne = (res, req) => { 
    res
    .status(200)
    .json({"status":"success"});
 };
const locationsUpdateOne = (res, req) => { 
    res
    .status(200)
    .json({"status":"success"});
 };
const locationsDeleteOne = (res, req) => { 
    res
    .status(200)
    .json({"status":"success"});
 };


module.exports = {
    locationsCreate,
    locationsDeleteOne,
    locationsListByDistance,
    locationsReadOne,
    locationsUpdateOne
};
