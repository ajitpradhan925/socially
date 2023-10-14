const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    image: {
      type: mongoose.Schema.ObjectId,
      ref: 'Attachment',
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        userId: mongoose.Schema.ObjectId,
        text: String,
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
