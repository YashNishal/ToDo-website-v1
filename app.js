// jshint esversion:6
const express = require("express");
const app = express();
// getting our custom module
const date = require(__dirname + "/date.js");


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// for linking css and js files
app.use(express.static("public"));

// lists
let items = ["Buy Food", "Cook Food","Eat Food"];
let workItems = [];


// root
app.get("/", function (req, res) {
  
  // let day = date.getDay();
  let day = date.getDate();

  res.render("list" , {
    listTitle : day,
    newListItems: items
  });
});

app.post("/",function(req, res) {
  console.log(req.body);
  let item = req.body.newItem;

  // logic to check if button pressed is on /work or on root dir
  if(req.body.list == "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
  }

  // console.log(items);
  res.redirect("/");
});



// /work
app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
});

app.post("/work", function(req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  console.log(items);
  res.redirect("/work");
});




app.listen(3000, function () {
  console.log("server started on port 3000");
});
