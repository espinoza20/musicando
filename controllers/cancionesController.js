const db = require('../database/models')
const Sequelize = require('sequelize');
const cancion = require('../database/models/Cancion.js');

let cancionesController = {
  list: (req, res) => {
    if (req.params.id === undefined) {
      res.status(200).send('Listado de canciones ' + Cancion);
    } else {
      res.send('Esta es la canción número ' + req.params.id);
    }
  },
  create: (req, res) => {
    let crearCancion = {
      titulo: req.body.titulo,
      duracion: req.body.duracion,
      created_at: req.body.created_at,
      updated_at: req.body.updated_at,
      genero_id: req.body.genero_id,
      album_id: req.body.album_id,
      artistas_id: req.body.artistas_id
    };
    res.redirect(Cancion);
  },
  edit: async (req, res) => {
    let cancionId = req.params.id;
    let cancion = await Cancion.findByPk(cancionId);
    if (!cancion) {
      res.status(404).send('Error al enviar los cambios.');
    } else {
      await cancion.destroy();
      res.status(200).send('La canción ha sido editada.');
    }
  },
  delete: (req, res) => {
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

