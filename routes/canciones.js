const express = require('express');
const router = express.Router;

router.get('/canciones');
router.post('/canciones');
router.get('/canciones/:id');
router.put('/canciones/:id');
router.delete('/canciones/:id');

module.exports = router;
    