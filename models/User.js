const { Schema, model } = require('mongoose');
// const thoughtsSchema = require('./Thought');

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
      // validate: {
      //     validator: () => Promise.resolve(false),
      //     message: 'Email validation failed'
      // }
    },

    thoughts: [{type: Schema.Types.ObjectId, ref: 'thoughts'}],

    friends: [{type: Schema.Types.ObjectId, ref: 'users'}],

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