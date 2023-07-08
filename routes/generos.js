const express = require('express');
const router = express.Router();
const generosController = require('../controllers/generosController');

router.get('/generos', generosController);

module.exports = router;