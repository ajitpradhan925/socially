const router = require('express').Router();
const { login, register, getProfile } = require('../controllers/Auth');
const jwtVerify = require('../middleware/jwtMiddleware');

router.post('/login', async (req, res) => {
  try {
    console.log({ body1: req.body });
    const response = await login(req.body);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

router.post('/register', async (req, res) => {
  try {
    console.log({ body1: req });
    const response = await register(req.body);
    res.json(response);
  } catch (error) {
    console.log(error);
  }
});

router.get('/me', jwtVerify, async (req, res) => {
  try {
    const response = await getProfile(req.user.userId);
    res.json(response);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
