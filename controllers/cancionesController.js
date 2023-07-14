const db = require('../database/models')
// const Sequelize = require('sequelize');
const cancion = require('../database/models/Cancion.js');

let cancionesController = {
  listar: (req, res) => {
    if (req.params.id === undefined) {
      res.status(200).send('Listado de canciones ' + Cancion);
    } else {
      res.send('Esta es la canción número ' + req.params.id);
    }
  },
  crear: (req, res) => {
    db.Canciones.findAll()
    .then(function(canciones){
      return res.render('listadoCanciones',{canciones:canciones})
    })
  },
  editar: async (req, res) => {
    let cancionId = req.params.id;
    let cancion = await Cancion.findByPk(cancionId);
    if (!cancion) {
      res.status(404).send('Error al enviar los cambios.');
    } else {
      await cancion.destroy();
      res.status(200).send('La canción ha sido editada.');
    }
  },
  borrar: (req, res) => {
    let cancionId = req.params.id;
    cancion.findByPk(cancionId, (err, cancion) => {
      if (err) {
        res.status(404).send('Error al eliminar la canción.');
      } else {
        cancion.destroy(err => {
          res.status(200).send('La canción ha sido eliminada.');
        });
      }
    });
  },
};

module.exports = cancionesController;

