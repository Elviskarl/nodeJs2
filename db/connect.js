const mongoose = require('mongoose');


async function connectToDb(url){  
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
    );
    console.log('Connected to MongoDb');
  } catch (err) {
    // console.error('Error connecting to MongoDB[connect.JS]:', err.message);
    throw err;
  }
}

module.exports = {connectToDb}