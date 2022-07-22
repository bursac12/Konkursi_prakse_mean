const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config();
const cors = require('cors');


app.use(cors());
const allowedOrigins = process.env.allowedOrigins.split(',');
const valFunctions = require('./validators/validate');
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
 

app.post('/signup', jsonParser, function (req, res) {
    if(valFunctions.checkInputDataNULL(req,res)) return false;
    if(valFunctions.checkInputDataQuality(req,res)) return false;
    var dbFunctions = require('./models/connector');
    dbFunctions.createUser(req,res);
});


app.post('/login', jsonParser, function (req, res) {
    if(valFunctions.checkInputDataNULL(req,res)) return false;
    if(valFunctions.checkInputDataQuality(req,res)) return false;
    var dbFunctions = require('./models/connector');
    dbFunctions.loginUser(req,res);
});


app.post('/pretraga', jsonParser, function (req, res) {
    if(valFunctions.checkInputDataNULL(req,res)) return false;
    if(valFunctions.checkInputDataQuality(req,res)) return false;
    var dbFunctions = require('./models/connector');
    dbFunctions.pretraga(req,res);
});


app.post('/student', jsonParser, function (req, res) {
    if(valFunctions.checkInputDataNULL(req,res)) return false;
    if(valFunctions.checkInputDataQuality(req,res)) return false;
    var dbFunctions = require('./models/connector');
    dbFunctions.pretragacomp(req,res);
});

app.post('/student/kompanije', jsonParser, function (req, res) {
    if(valFunctions.checkInputDataNULL(req,res)) return false;
    if(valFunctions.checkInputDataQuality(req,res)) return false;
    var dbFunctions = require('./models/connector');
    dbFunctions.pretraga(req,res);
});

app.post('/student/prijava', jsonParser, function (req, res) {
    if(valFunctions.checkInputDataNULL(req,res)) return false;
    if(valFunctions.checkInputDataQuality(req,res)) return false;
    var dbFunctions = require('./models/connector');
    dbFunctions.prijava(req,res);
});

app.post('/kompanija/dodaj', jsonParser, function (req, res) {
    if(valFunctions.checkInputDataNULL(req,res)) return false;
    if(valFunctions.checkInputDataQuality(req,res)) return false;
    var dbFunctions = require('./models/connector');
    dbFunctions.dodajk(req,res);
});

app.post('/lozinka', jsonParser, function (req, res) {
    if(valFunctions.checkInputDataNULL(req,res)) return false;
    if(valFunctions.checkInputDataQuality(req,res)) return false;
    var dbFunctions = require('./models/connector');
    dbFunctions.lozinka(req,res);
});




app.use('/', (req, res) => res.send("Welcome PIA Projekat 2018 User !"));
app.listen(process.env.PORT, () => console.log('Server is ready on localhost:' + process.env.PORT));