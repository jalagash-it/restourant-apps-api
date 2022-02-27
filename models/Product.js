'use strict';
module.exports = mongoose => {
  const newSchema = new mongoose.Schema({
    name: {
      type: String
    }
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });
  const Product = mongoose.model('Product', newSchema);
  return Product;
};