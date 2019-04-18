const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  nickName: {
    type: String,
  },
  avatar: {
    type: String,
  },
  posit:{
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Seller', sellerSchema);
