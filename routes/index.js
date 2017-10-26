const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const config = require('../config.js');

const connection = mysql.createConnection(config);

connection.connect();

// Liste des articles 
router.get('/', function(req, res, next) {
  res.render('index');
});


// GET /articles/1 ou /articles/2
// TODO créer la route qui affichera l'article en détail 

module.exports = router;
