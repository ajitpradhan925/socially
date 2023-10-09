const { Post } = require('../models');
const { addAttachment, getAttachmentsByPostId } = require('./Attachment');

const addPost = async (body, userId, file) => {

    try {
   
        console.log({file});

        let attachmentResponse = await addAttachment(file);
        let post = {
            user: userId,
            title: body.title,
            description: body.description,
            image: attachmentResponse._id
        }
        let postRespone = await Post.create(post);
        return postRespone;
    } catch (error) {
        throw error;
    }
};

const getPosts = async (body, userId, file) => {

    try {
        let postRespone = await Post.find({}).populate("user", ["-password"]).populate("image");
        return postRespone;
    } catch (error) {
        throw error;
    }
};

const likePost = async (postId) => {

    try {
        let updateRespone = await Post.findByIdAndUpdate(postId, {likeCount: likeCount + 1})
        return updateRespone;
    } catch (error) {
        throw error;
    }
};

const commentPost = async (body, userId, file) => {

    try {
        let postRespone = await Post.find({}).populate("user", ["-password"]).populate("image");
        return postRespone;
    } catch (error) {
        throw error;
    }
};



module.exports = {
    addPost,
    getPosts,
    likePost,
    commentPost,
};