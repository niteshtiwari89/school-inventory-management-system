const mongoose = require('mongoose');

const LogsSchema = new mongoose.Schema({
    inventory_name:{type:String , required: true},
    item_name:{type:String },
    previous_quantity:{type:Number},
    new_quantity:{type:Number},
    reason:{type:String},
    timestamp:Date,
})

module.exports = mongoose.model('logs',LogsSchema)