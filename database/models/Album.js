module.exports = (sequelize, dataTypes) => {
    let alias = "Albumes";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            allownull: false,
            type: dataTypes.STRING
        },
        duracion:{
            type: dataTypes.INTEGER
        },
    };
    let config = {
        tableName: "albumes",
        timestamps: false
    };
    const Album = sequelize.define(alias, cols, config);

    Album.associate = function (models){
      Album.belongsToMany(models.Canciones, {
        as: 'canciones',
        through: 'canciones_albumes',
        foreignKey: 'album_id',
        otherKey:'cancion_id'
      })
    }


    return Album;
}