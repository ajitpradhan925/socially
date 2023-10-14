const { Attachment } = require('../models');

const addAttachment = async (file) => {
  const { mimetype, destination, filename } = file;
  const attachment = {
    fileName: filename,
    filePath: destination,
    mimetype,
  };
  const createResult = await Attachment.create(attachment);
  return createResult;
};

module.exports = {
  addAttachment,
};
