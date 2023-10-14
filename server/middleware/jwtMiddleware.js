const { verifyToken } = require('../utils');

// eslint-disable-next-line consistent-return
const jwtVerify = (req, res, next) => {
  const bearerToken = req.headers.authorization;
  if (!bearerToken) {
    return res.status(401).json({ message: 'You are not authenticated.' });
  }

  const token = bearerToken.split('Bearer')[1].trim();

  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ message: 'Failed to authenticate token' });
  }
  req.user = decoded;
  next();
};

module.exports = jwtVerify;
