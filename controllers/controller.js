const {validationResult} = require("express-validator");
const {Customer}=require("../models/customerModel");
const calculateTax = require("../calculation/calculation");
const { json } = require("express");

const postOrder= (req, res)=>{
    let errors= validationResult(req);

    if(!errors.isEmpty()){
        res.render("pages/order", {errors:errors.array()});
    }else {
        let fullname= req.body.fullname;
        let contactNumber= req.body.contactNumber;
        let address= req.body.address.toUpperCase();
        let product2Quantity= req.body.productTwo;
        let product3Quantity= req.body.productThree;
        let city= req.body.city.toUpperCase();
        let province=req.body.province;
        let postCode=req.body.postCode.toUpperCase();
        let product1Quantity= req.body.productOne;
        let product1Value= product1Quantity*5;
        let product2Value= product2Quantity*20;
        let product3Value=product3Quantity*30;
        let shippingCharge= 20;
        let ProductTotal=product1Value + product2Value + product3Value
        let email=req.body.email;
        let subTotal = ProductTotal + shippingCharge;

      if (ProductTotal <= 10) {
        res.render("pages/order", { errors: [{ msg: "Purchase amount must be greater than 10." }] });
      } else {
        let taxAmount = calculateTax(province, subTotal);
        let total = subTotal + parseFloat(taxAmount);

        let newCustomer = new Customer({
            fullName: fullname,
            Email: email,
            contactNumber:contactNumber,
            Address:address,
            City:city,
            Province:province,
            postCode:postCode,
            productOneQuantity:product1Quantity,
            productTwoQuantity:product2Quantity,
            productThreeQuantity:product3Quantity,
            productOneValue:product1Value,
            productTwoValue:product2Value,
            productThreeValue:product3Value,
            ProductTotal:ProductTotal,
            subTotal:subTotal,
            shippingCharge:shippingCharge,
            taxAmount:taxAmount,
            Total:total
           
        });

        newCustomer.save()
            .then(() => { console.log(`Done`) })
            .catch((error) => { console.log(error.message) });
        
        res.render("pages/receipt", {
          name: fullname,
          email: email,
          phone: contactNumber,
          address: address,
          city: city,
          province: province,
          postCode: postCode,
          productOneQuantity: product1Quantity,
          productTwoQuantity: product2Quantity,
          productThreeQuantity: product3Quantity,
          productOneValue: product1Value,
          productTwoValue: product2Value,
          productThreeValue: product3Value,
          shippingCharge: shippingCharge,
          subTotal: subTotal,
          taxAmount: taxAmount,
          total: total,
        });
      }
     
    }
};

const getOneCustomer=async(req,res)=>{
    let myCustomerdetail=await Customer.findById(req.params.id).exec();

    res.render("pages/viewcustomers", {Customer:myCustomerdetail});
};

const getAllCustomer = async (req, res) => {
    let findCustomers = await Customer.find({}).exec();
    res.render("pages/allcustomers", { Customers: findCustomers });
    
};
        


module.exports = {
    postOrder,
    getAllCustomer,
    getOneCustomer
};
