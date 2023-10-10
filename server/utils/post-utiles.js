const FormData = require('form-data');

function base64ToFormData(base64String) {
  const formData = new FormData();
  const buffer = Buffer.from(base64String, 'base64');

  // Append the buffer as a file to the FormData object
  formData.append('image', buffer, {
    filename: 'file.png', // Provide a filename as needed
  });

  return formData;
}

module.exports = base64ToFormData;
