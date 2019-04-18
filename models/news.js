const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  descriptions: {
    type: String,
    required: true,
  },
  coverImg: {
    type: String,
    required: true,
  },
  lifeTime:{
      type:Number,
      required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('news', newsSchema);
