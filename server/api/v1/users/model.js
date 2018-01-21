const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  firstname: {
    type: String,
    maxlength: 32,
    required: true
  },
  lastname: {
    type: String,
    maxlength: 32,
    required: true
  },
  email: {
    type: String,
    maxlength: 64,
    required: true
  },
  status: {
    type: Boolean,
    default: true,
    require: true
  }
},{
    timestamps: true
});
    
module.exports = mongoose.model('user', schema);