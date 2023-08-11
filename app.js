require("dotenv").config();
const express = require("express");
const path= require("path");
const mongoose=require("mongoose");
const {postOrder, getAllCustomer, getOneCustomer}=require("./controllers/controller")
const {orderValidators}=require("./middleware/validators")
const bodyParser = require('body-parser');

const url= process.env.MONGODB_CONNECTION_STRING;
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected");
  })
  .catch((error) => {
    console.log(error.message);   
  });

const app = express();
const port =6969;

app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(express.json());
app.set("views",path.join(__dirname, "views"));
app.set("view engine", "ejs");
 

//Routes
app.get("/",(req,res)=>{
    res.render("pages/order");

})
app.post("/",orderValidators, postOrder)
app.get("/customers", getAllCustomer)
app.get("/customer/:id",getOneCustomer);

app.listen(port,()=>{
    console.log(`server runs on ${port}`);
});
