class HttpStatusError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'HttpStatusError';
    this.statusCode = statusCode;
  }
}

module.exports = HttpStatusError;
