const router = require('express').Router();
const { login, register, getProfile } = require("../controllers/Auth");
const jwtVerify = require('../middleware/jwtMiddleware');

router.post('/login', async(req, res) => {
    try {
        console.log({body1: req.body});
        let response = await login(req.body);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
});

router.post('/register', async (req, res) => {
    try {
        console.log({body1: req});
        let response = await register(req.body);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
});

router.get('/me', jwtVerify, async(req, res) => {
    try {
        let response = await getProfile(req.user.userId);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;