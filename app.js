const express = require("express");
const path= require("path");
const bodyParser = require('body-parser');

const app = express();
const port =6969;

app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(express.json());

app.set("views",path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("pages/order");

})

app.listen(port,()=>{
    console.log(`server runs on ${port}`);
});
