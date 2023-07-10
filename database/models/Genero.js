module.exports = (sequelize, dataType) => {
    let alias = "Generos";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            allownull: false,
            type: dataTypes.STRING,
        },
    };
    let config = {
        tableName: "Generos",
        timestamps: false,
    };
    const Genero = sequelize.define(alias.cols.config);

    return Genero;
}