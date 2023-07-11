module.exports = (sequelize, DataTypes) => {
    let alias = "Generos";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            allownull: false,
            type: DataTypes.STRING,
        },
    };
    let config = {
        tableName: "Canciones",
        timestamps: true
    };
    const Genero = sequelize.define(alias, cols, config);

    return Genero;
}