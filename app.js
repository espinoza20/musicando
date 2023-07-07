const express = require("express");
const app = express();
const methodOverride = require("method-override");
app.use(methodOverride("_method"));


app.listen(3030,()=>{
    console.log('Server started on http://localhost:3030');
    });