const cancionesController = {
list:(req, res) => {
 res.json('Estas son todas las canciones')
},
create:(req, res) => {
    res.json('Se ha creado con exito el nuevo registro')
},
edit:(req, res) => {
res.json('Ha sido editado con exito la cancion')
},
delete:(req, res) => {
    
},
}

module.exports = cancionesController;