 const express = require('express');
//import express from 'express';
 const path = require('path');
//import path from 'path'
const app = express();
 const methodOverride = require("method-override");
// import methodOverride from 'method-override'
app.use(methodOverride("_method"));


 const cancionesRoutes = require('./routes/canciones');
// import cancionesRoutes from './routes/canciones.js'
 const generosRoutes = require('./routes/generos');
// import generosRoutes from './routes/generos.js'
app.use('/canciones',cancionesRoutes);
app.use('/generos', generosRoutes);


app.listen(3030,()=>{
    console.log('Server started on http://localhost:3030');
    });