const generosController = {
    list: (req, res) => {
        if (req.params.id === undefined) {
            res.status(200).send('Listado de canciones ' + Cancion);
        } else {
            res.send('Esta es la canción número ' + req.params.id);
        }
    },
};

module.exports = generosController;
