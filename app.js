const express = require('express');
const app = express();
const taskRouter = require('./Routes/tasks');
const {connectToDb} =require('./db/connect');
require('dotenv').config();
const notFound = require('./middle-ware/notFound');
const errorHandler = require('./middle-ware/error-handler');


// Middle-ware
app.use(express.static('./public'));
app.use(express.json());
// Routes
app.use('/api/v1/tasks',taskRouter);
app.use(notFound);
app.use(errorHandler);
// Port
const port = process.env.PORT ||  3000;
// Static/Public files

async function start() {
  try {
    await connectToDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Connected to the server on Port: ${port}.`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}

start();
