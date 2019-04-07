const mongoose = require('mongoose');

const userTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  descriptions: {
    type: String,
  },
  coverImg: {
    type: String,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('userType', userTypeSchema);
