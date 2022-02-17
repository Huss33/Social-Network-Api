const { Schema, model } = require('mongoose');
const thoughsSchema = require('./Thought');
const friendsSchema = require()

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      max_length: 20,
      min_length: 4,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: {
          validator: () => Promise.resolve(false),
          message: 'Email validation failed'
      }
    },

    thoughts: [thoughsSchema],

    friends: [userSchema],

  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });

const User = model('user', userSchema);

module.exports = User;