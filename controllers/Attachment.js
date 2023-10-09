const { v4 } = require('uuid');
const { Attachment } = require('../models');

const addAttachment = async (file) => {
    const { mimetype, destination, originalname } = file;
    let uuid = v4();
    let attachment = {
        fileName: `${uuid}.${mimetype.split("image/")[1]}`,
        filePath: destination,
        mimetype
    }
    return await Attachment.create(attachment);
}

const getAttachmentsByPostId = async (postId) => {
    return await Attachment.find({postId});
}


module.exports = {
    addAttachment,
    getAttachmentsByPostId
};