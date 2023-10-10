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

const likePost = async (postId) => {
  const updateRespone = await Post.findByIdAndUpdate(postId, {
    likeCount: 1,
  });
  return updateRespone;
};

// const commentPost = async (body, userId, file) => {
//   try {
//     const postRespone = await Post.find({})
//       .populate("user", ["-password"])
//       .populate("image");
//     return postRespone;
//   } catch (error) {
//     throw error;
//   }
// };

module.exports = {
  addPost,
  getPosts,
  likePost,
//   commentPost,
};
