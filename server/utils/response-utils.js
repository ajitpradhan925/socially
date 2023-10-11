// responseUtils.js

// Function to send a success response
function sendSuccessResponse(res, message = 'Success', data = null, statusCode = 200) {
  res.status(statusCode).json({
    success: true,
    message,
    data,
  });
}

// Function to send an error response
function sendErrorResponse(res, message = 'Internal Server Error', statusCode = 500) {
  res.status(statusCode).json({
    success: false,
    message,
  });
}

module.exports = {
  sendSuccessResponse,
  sendErrorResponse,
};
