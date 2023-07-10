const cancionesController = {
list:{ function (req, res) {
    res.send('Bienvenidos al producto ' + req.params.idProducto)
},},
create:{},
edit:{},
delete:{},
}

module.exports = cancionesController;