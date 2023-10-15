const mongoose = require('mongoose');
const { Post } = require('../models');
const { addAttachment } = require('./Attachment');

const addPost = async (body, userId, file) => {
  const attachmentResponse = await addAttachment(file);
  const post = {
    user: userId,
    title: body.title,
    description: body.description,
    // eslint-disable-next-line no-underscore-dangle
    image: attachmentResponse._id,
  };
  const postRespone = await Post.create(post);
  return postRespone;
};

const getPosts = async () => {
  const postRespone = await Post.find({})
    .populate('user', ['-password'])
    .populate('image')
    .sort({ createdAt: -1 });
  return postRespone;
};

const likePost = async (postId, userId) => {
  const updateResponse = await Post.findById(postId);
  const userIdObj = new mongoose.Types.ObjectId(userId);
  console.log({ userIdObj });
  if (updateResponse.likes.includes(userIdObj)) {
    updateResponse.likes = updateResponse.likes.filter((uId) => uId.toString() !== userId);
  } else {
    updateResponse.likes.push(userIdObj);
  }

  console.log({ updateResponse: updateResponse.likes, userIdObj });
  const updateRes = await updateResponse.save();
  return updateRes;
};

const commentPost = async (body, userId) => {
  const updateResponse = await Post.findById(body.postId);
  updateResponse.comments.push({ text: body.text, userId });
  await updateResponse.save();
  return updateResponse;
};

module.exports = {
  addPost,
  getPosts,
  likePost,
  commentPost,
};
