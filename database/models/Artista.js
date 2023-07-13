module.exports = (sequelize, dataTypes) => {
    let alias = "Artistas";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
    };
    let config = {
        tableName: "artistas",
        timestamps: true
    }
    const Artista = sequelize.define(alias, cols, config);

    Artista.associate = function (models) {
        Artista.belongsToMany(models.Canciones, {
          as: 'canciones',
          through: 'canciones_artistas',
          foreignKey: 'artista_id',
          otherKey:'cancion_id',
        });
    }
    return Artista;
};