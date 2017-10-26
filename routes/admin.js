const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const config = require('../config.js');

const connection = mysql.createConnection(config);

connection.connect();


// GET /admin 
router.get('/', function(req, res, next) {
	// Liste des articles
	res.render('admin-index');
});

// GET /admin/create
router.get('/create', function(req, res, next) {
	// Formulaire de création d'article
	res.render('admin-create');
});

// POST /admin/create
router.post('/create', function(req, res, next) {
	// Création d'article
	// PUIS
	// Redirection vers /admin
});


module.exports = router;
