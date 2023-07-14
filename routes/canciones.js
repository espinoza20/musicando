const express = require('express');
const router = express.Router();
const cancionesController = require('../controllers/cancionesController');

router.get('/', cancionesController.list);
router.post('/crear', cancionesController.create);
router.get('/:id', cancionesController.list);
router.put('/editar/:id', cancionesController.edit);
router.delete('/eliminar/:id', cancionesController.delete);

module.exports = router;
