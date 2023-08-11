const mongoose = require("mongoose");
const { calculateTax } = require("../calculation/calculation");

const customerSchema = new mongoose.Schema({
    "fullName": { type: String },
    "Email": { type: String},
    "contactNumber":{type:String},
    "Address":{type:String},
    "City":{type:String},
    "Province":{type:String},
    "postCode":{type:String},
    "productOneQuantity":{type:String},
    "productTwoQuantity":{type:String},
    "ProductTotal":{type:Number},
    "shippingCharge":{type:Number},
    "subTotal":{type:Number},
    "taxAmount":{type:Number},
    "Total":{type:Number}
});


const Customer = mongoose.model("customers", customerSchema);


module.exports = {
    Customer,
    calculateTax
}
