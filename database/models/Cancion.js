module.exports = (sequelize, dataType) => {
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
        tableName: "Canciones",
        timestamps: true
    };
    const Cancion = sequelize.define(alias.cols.config);

    return Cancion;
};
