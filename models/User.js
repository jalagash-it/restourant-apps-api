'use strict';
module.exports = mongoose => {
  const newSchema = new mongoose.Schema({
    email: {
      type: String
    },
    password: {
      type: String
    },
    token: {
      type: String
    }
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });
  const User = mongoose.model('User', newSchema);
  return User;
};