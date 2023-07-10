const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require("method-override");

app.use(methodOverride("_method"));


const cancionesRoutes = require('./routes/canciones');
const generosRoutes = require('./routes/generos');
app.use('/canciones', cancionesRoutes);
app.use('/generos', generosRoutes);


app.listen(3030, () => {
    console.log('Server started on http://localhost:3030');
});