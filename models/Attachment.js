const mongoose = require("mongoose");

const AttachmentSchema = new mongoose.Schema(
  {
    fileName: String,
    filePath: {
      type: String,
    },
    mimetype: String
  },
  {
    timestamps: true,
  }
);

const Attachment = mongoose.model("Attachment", AttachmentSchema);

module.exports = Attachment;
