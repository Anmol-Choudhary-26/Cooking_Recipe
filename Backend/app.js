const express = require('express')
const app = express()
const helmet = require('helmet')
const User = require('./models/user')
const Recipe = require('./models/recipe')
const connectDb = require('./db/connection');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user')
const recipeRoute = require('./routes/recipe')
require('dotenv').config()
const port =  process.env.PORT || 8080
const cors = require("cors");
app.use(cors());


// middleware
app.use(express.static('./public'));
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// routes
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/recipe',recipeRoute )


// Database connection
const start = () => {
  try {
    connectDb(process.env.MONGO_URI).then(()=>{
      console.log('Success')
      app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
    }).catch((error)=>{
      console.log(error)
    })
  } catch (error) {
    console.log(error);
  }
};

start();