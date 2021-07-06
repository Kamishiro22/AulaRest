import mongoose from 'mongoose'

//Schema
const schema = new mongoose.Schema(
  { 
    name: {type: 'string', required : true}
  }
);

//Model
const LinuxOS = mongoose.model('LinuxOS', schema)

export default LinuxOS