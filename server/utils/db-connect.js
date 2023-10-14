const mongoose = require('mongoose');

const { MONGO_URI } = process.env;

async function connectDB() {
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect(MONGO_URI);
    console.log('Mongo connected');
  } catch (error) {
    console.log(error);
    process.exit();
  }
}

module.exports = connectDB;
