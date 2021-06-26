const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

const partialPath = path.join(__dirname,"../templates/partials");
const viewPath = path.join(__dirname,"../templates/views");

app.use(express.static(path.join(__dirname,"../public")));

hbs.registerPartials(partialPath);

app.set("view engine","hbs");
app.set("views",viewPath);
app.set("partial",partialPath);

app.get('/',(req,res) =>{
    res.render('index');
})

app.listen(3000, ()=>{
    console.log("Server is startig at 3000");
});