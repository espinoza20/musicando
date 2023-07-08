const express = require('express');
const router = express.Router();
const cancionesController = require('../controllers/cancionesController');

router.get('/canciones', cancionesController);
router.post('/canciones', cancionesController);
router.get('/canciones/:id', cancionesController);
router.put('/canciones/:id', cancionesController);
router.delete('/canciones/:id', cancionesController);

module.exports = router;
    