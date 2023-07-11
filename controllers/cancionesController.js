const db = require('../database/models')
const Sequelize = require('sequelize');
const cancion = require('../database/models/Cancion.js');

let cancionesController = {
  list: (req, res) => {
    db.Canciones.findAll()
      .then(function(canciones) {
        let titles = canciones.map(cancion => cancion.title);
        res.render('Listado de canciones', { canciones: titles });
      })
      .catch(function(error) {
        console.log(error);
        res.send('Error al listar las canciones');
      });
  },
  create:(req, res) => {

  },
  edit:(req, res) => {
    let cancionId = req.params.id;
    cancion.findByPk(cancionId, (err, Cancion) => {
      if (err) {
        res.status(404).send('Error al enviar los cambios.');
      } else {
        cancion.remove(err => {
          res.status(200).send('La canción ha sido editada.');
        });
      }
    });
  },
  delete:(req, res) => {
    let cancionId = req.params.id;
    cancion.findByPk(cancionId, (err, Cancion) => {
      if (err) {
        res.status(404).send('Error al eliminar la canción.');
      } else {
        cancion.remove(err => {
          res.status(200).send('La canción ha sido eliminada.');
        });
      }
    });
  },
};

module.exports = cancionesController;
