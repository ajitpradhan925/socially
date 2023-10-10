const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const JWT_SECRET = process.env.JWT_SECRET;

// Hash passowrd
async function hashPassword(plainPassword) {
    return await bcrypt.hash(plainPassword, 10);
}

// Verify password
async function comparePassword(plainPassword, hashedPassword) {
    console.log({plainPassword, hashedPassword});
    return await bcrypt.compare(plainPassword, hashedPassword);
}

// Generate Token
async function generateToken(user) {
    const payload = {
        userId: user._id,
        email: user.email,
        name: user.name
    };

    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
};

// Verify a JWT Token
function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return decoded;
    } catch (error) {
        return null;
    }
};

module.exports = {
    hashPassword,
    comparePassword,
    generateToken,
    verifyToken
};  