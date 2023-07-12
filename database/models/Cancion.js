/*module.exports = (sequelize, DataTypes) => {
    let alias = "canciones";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: {
            type: DataTypes.STRING
        },
        duracion: {
            type: DataTypes.INTEGER
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        },
        genero_id: {
            type: DataTypes.INTEGER,
        },
        album_id: {
            type: DataTypes.INTEGER,
        },
        artistas_id: {
            type: DataTypes.INTEGER,
        },
    };
    let config = {
        tableName: "Canciones",
        timestamps: true
    };
    const Cancion = sequelize.define(alias, cols, config);

    return Cancion;
};*/

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  let alias = "canciones";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING,
    },
    duracion: {
      type: DataTypes.INTEGER,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    genero_id: {
      type: DataTypes.INTEGER,
    },
    album_id: {
      type: DataTypes.INTEGER,
    },
    artistas_id: {
      type: DataTypes.INTEGER,
    },
  };
  let config = {
    tableName: "Canciones",
    timestamps: true,
  };

  const Cancion = sequelize.define(alias, cols, config);

  return Cancion;
};
