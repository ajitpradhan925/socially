const { Attachment } = require('../models');

const addAttachment = async (file) => {
  const { mimetype, destination, filename } = file;
  const attachment = {
    fileName: filename,
    filePath: destination,
    mimetype,
  };
  return await Attachment.create(attachment);
};

const getAttachmentsByPostId = async (postId) => await Attachment.find({ postId });

module.exports = {
  addAttachment,
  getAttachmentsByPostId,
};
