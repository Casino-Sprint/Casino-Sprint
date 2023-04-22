const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const userController = require('./userController');
const sessionController = require('./sessionController')


app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded());

app.get('/api', (req, res)=>{
  res.status(200).json('server is running')
})

// checks for login
app.post('/login',
  userController.createUser,
  sessionController.setSSIDCookie,
  sessionController.createSession,
  sessionController.isLoggedIn,
  (req, res)=>{
  res.status(200).json(res.locals.user);
})
//grab user doc from db
app.get('/isLoggedIn', userController.getUser,userController.isLoggedIn, (req, res)=>{
  res.status(200).json(res.locals.user)
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

