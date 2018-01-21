const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  content: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    //type: String,
    ref: 'user',
    required: true
  },
  location: {
    type: String,
    required: true
  } 
},{
    timestamps: true
});
    
module.exports = mongoose.model('tweet', schema);