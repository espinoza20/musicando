const express = require('express');
const router = express.Router();
const cancionesController = require('../controllers/cancionesController');

router.get('/', cancionesController.list);
router.post('/', cancionesController.create);
router.get('/:id', cancionesController.list);
router.put('/:id', cancionesController.edit);
router.delete('/:id', cancionesController.delete);

module.exports = router;
