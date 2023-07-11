const cancion = require('../database/models/Cancion.js');

const cancionesController = {
  list: (req, res) => {
    if (req.params.id === undefined) {
      res.status(200).send('Este es el listado de canciones');
    } else {
      res.send('Esta es la cancion numero ' + req.params.id);
    }
  },
  create: (req, res) => {
    const crearCancion = new cancion();
    crearCancion.id = req.body.id,
    crearCancion.titulo = req.body.titulo,
    crearCancion.duracion = req.body.duracion,
    crearCancion.created_at = req.body.created_at,
    crearCancion.updated_at = req.body.updated_at,
    crearCancion.genero_id = req.body.genero_id,
    crearCancion.album_id = req.body.album_id,
    crearCancion.artistas_id = req.body.artistas_id,

    crearCancion.save((err, cancionStored) => {
        if (err)res.status(404).send('Error al crear un nuevo registro')

        res.status(200).send({cancion : cancionStored})
    })
  },
  edit: (req, res) => {
    let cancionId = req.params.id;
    cancion.findById(cancionId, (err, Cancion) => {
      if (err) {
        res.status(404).send('Error al enviar los cambios.');
      } else {
        cancion.remove(err => {
          res.status(200).send('La canción ha sido editada.');
        });
      }
    });
  },
  delete: (req, res) => {
    let cancionId = req.params.id;
    cancion.findById(cancionId, (err, Cancion) => {
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
