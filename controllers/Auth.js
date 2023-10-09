const { User } = require('../models');
const { comparePassword, generateToken } = require('../utils');

const register = async (body) => {
    console.log({body});
    return await User.create(body);
};


const login = async (body) => {
    let user = await User.findOne({email: body.email});
    if (!user) throw new Error('User does not exists.');

    let compareResponse = await comparePassword(body.password, user.password);
    if (!compareResponse) throw new Error('Entered password is invalid.');

    let token = await generateToken(user);

    return {user, token};
};

const getProfile = async (userId) => {
    let user = await User.findById(userId).select(["-password", "-__v"]);
    
    if (!user) throw new Error('User does not exists.');
    return user;
};



module.exports = {
    login,
    register,
    getProfile,
};