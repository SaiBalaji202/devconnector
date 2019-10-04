const config = require ('config');
const mongoose = require ('mongoose');

const db = config.get ('mongoURI');

const connectDB = async () => {
  try {
    mongoose.connect (db, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log ('Connected to MongoDB...');
  } catch (error) {
    console.error ('Unable to connect to the DataBase');
    // Exit the Application
    process.exit (1);
  }
};

module.exports = connectDB;
