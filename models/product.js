const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  descriptions: {
    type: String,
  },
  quantity: {
    type: Number,
    default: 10,
  },
  price: {
    type: Number,
    default: 0.00,
  },
  coverImg: {
    type: String,
  },
  isActive:{
    type: Boolean,
    default:false,
  },
  productCategory: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'ProductCategory'
  },
  seller: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Seller'
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Product', productSchema);
