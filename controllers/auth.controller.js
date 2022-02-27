const authService = require('../services/auth.service.js')
const login = async (req, res) => {
    const { email, password } = req.body;
    const token = await authService.checkUser(email, password);
    if (!token) {
        res.sendStatus(403);
        return;
    }
    res.send(token)
}
module.exports = { login }