const models = require('../models').default;
const generateToken = require('../utils/generateToken');

const checkUser = async (email, password) => {
    console.log(models);
    const User = models.User;
    const exists = await User.findOne({ email, password });
    if (!exists) return null;
    const token = generateToken();
    exists.token = token;
    await exists.save();
    return token;
}

module.exports = { checkUser };