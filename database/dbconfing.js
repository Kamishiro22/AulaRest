import mongoose from "mongoose";

function configMongoDB(){
  try {
    mongoose.connect(process.env.DB_ADDRESS, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
    console.log('Connected to Database')
  })
  } catch (error) {
    console.error(error)
  }
}

export default configMongoDB