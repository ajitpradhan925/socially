const { User } = require('../models');
const { comparePassword, generateToken } = require('../utils');
const HttpStatusError = require('../utils/error-class');

const register = async (body) => {
  const response = await User.create(body);
  return response;
};

const login = async (body) => {
  const user = await User.findOne({ email: body.email });
  if (!user) throw new HttpStatusError('User does not exist.', 404);

  const compareResponse = await comparePassword(body.password, user.password);
  if (!compareResponse) throw new HttpStatusError('Entered password is invalid.', 403);

  const token = await generateToken(user);

  return { user, token };
};

const getProfile = async (userId) => {
  const user = await User.findById(userId).select(['-password', '-__v']);

  if (!user) throw new Error('User does not exists.');
  return user;
};

module.exports = {
  login,
  register,
  getProfile,
};
