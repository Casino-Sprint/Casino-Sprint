const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');

const controller = require('./controller')


app.use(express.json());

app.get('/', (req, res)=>{
    res.status(200).json("server is running")
})

app.listen(PORT,()=>{console.log(`listening on PORT:${PORT}`)});
