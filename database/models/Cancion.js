module.exports = (sequelize, dataTypes) => {
    let alias = "Canciones";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: {
            type: dataTypes.STRING
        },
        duracion: {
            type: dataTypes.INTEGER
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        genero_id: {
            type: dataTypes.INTEGER,
        },
        album_id: {
            type: dataTypes.INTEGER,
        },
        artistas_id: {
            type: dataTypes.INTEGER,
        },
    };
    let config = {
        tableName: "canciones",
        timestamps: true
    };
    const Cancion = sequelize.define(alias, cols, config);

    Cancion.associate = function (models){
      Cancion.belongsTo(models.Albumes,{
        as: 'albumes',
        foreignKey: 'album_id',
      })
    }

    Cancion.associate = function (models){
      Cancion.belongsTo(models.Artistas,{
        as:'artistas',
        foreignKey: 'artista_id',
      })

      Cancion.associate = function (models){
        Cancion.belongsTo(models.Generos,{
          as:'generos',
          foreignKey: 'genero_id',
        })
    }

    return Cancion;
};
}
