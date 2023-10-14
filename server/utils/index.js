const {
  comparePassword, generateToken, hashPassword, verifyToken,
} = require('./auth-utils');
const connectDB = require('./db-connect');

module.exports = {
  comparePassword,
  generateToken,
  hashPassword,
  verifyToken,
  connectDB,
};
