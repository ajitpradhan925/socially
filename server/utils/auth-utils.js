const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { JWT_SECRET } = process.env;

// Hash passowrd
async function hashPassword(plainPassword) {
  const hashedPassoword = await bcrypt.hash(plainPassword, 10);
  return hashedPassoword;
}

// Verify password
async function comparePassword(plainPassword, hashedPassword) {
  const comparedResponse = await bcrypt.compare(plainPassword, hashedPassword);
  return comparedResponse;
}

// Generate Token
async function generateToken(user) {
  const payload = {
    // eslint-disable-next-line no-underscore-dangle
    userId: user._id,
    email: user.email,
    name: user.name,
  };

  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

// Verify a JWT Token
function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
}

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
  verifyToken,
};
