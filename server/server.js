const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');

const controller = require('./userController');


app.use(express.json());

app.get('/api', (req, res)=>{
    res.status(200).json('server is running')
})

app.post('/api', (req, res)=>{
    const {email} = req.body
    res.status(200).json({email})
})

// global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(PORT,()=>{console.log(`listening on PORT:${PORT}`)});
