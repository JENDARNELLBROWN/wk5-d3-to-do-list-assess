const express = require("express");
const app = express();
const mustacheExpress = require('mustache-express');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(express.static("public"));

app.engine("mustache", mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get("/", function(req, res) {
res.render('index', {name:'To Do'});
});

app.listen(3000, function() {
    console.log('To Do List');
});