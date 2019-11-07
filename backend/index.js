const express = require('express');
const app = express();
const consign = require('consign');

consign()
    .then('./config/middlewares.js')
    .into(app);

app.listen(3000, () => {
    console.log('Backend executando...'); 
})