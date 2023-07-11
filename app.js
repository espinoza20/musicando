const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require("method-override");

const cancionesRoutes = require('./routes/canciones');
const generosRoutes = require('./routes/generos');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(methodOverride("_method"));

app.use('/canciones', cancionesRoutes);
app.use('/generos', generosRoutes);


app.listen(3030, () => {
    console.log('Server started on http://localhost:3030');
});