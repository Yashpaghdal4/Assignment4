const {check, oneOf,body}= require("express-validator");

const orderValidators = [
    check("fullname").not().isEmpty().withMessage("Please enter your full name"),
    check("address").not().isEmpty().withMessage("Address is required"),
    check("city").not().isEmpty().withMessage("City is required"),
    check("postCode").matches(/^[a-zA-Z]\d[a-zA-Z] ?\d[a-zA-Z]\d$/).withMessage("Please enter a valid postal code"),
    check("province").not().isEmpty().withMessage("province is required"),
    check("email").matches (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).withMessage("Please enter a valid email address"),
    check("contactNumber").matches(/^\d{3}-\d{3}-\d{4}$/).withMessage("Please enter a valid contact number"),
    check("productOne")
        .optional({checkFalsy:true})
        .isNumeric().withMessage("Pleasae enter a numner for product 1"),
    check("productTwo")
      .optional({checkFalsy:true})
      .isNumeric().withMessage("Pleasae enter a numner for product 2"),
    check("productThree")
     .optional({checkFalsy:true})
     .isNumeric().withMessage("Pleasae enter a numner for product 3"),
    oneOf([
        body("productOne").not().isEmpty(),
        body("productTwo").not().isEmpty(),
        body("productThree").not().isEmpty()
    ],{message:"at least one oroduct must be purchase"})

];

module.exports= {
    orderValidators
}
