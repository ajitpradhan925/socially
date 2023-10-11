const router = require('express').Router();
const { login, register, getProfile } = require('../controllers/Auth');
const jwtVerify = require('../middleware/jwtMiddleware');
const HttpStatusError = require('../utils/error-class');

router.post('/login', async (req, res) => {
  try {
    console.log({ body1: req.body });
    const response = await login(req.body);
    console.log({ response });
    res.json(response);
  } catch (error) {
    if (error instanceof HttpStatusError) {
      res.status(error.statusCode).send({ msg: error.message });
    } else {
      console.log(error);
      res.status(500).send({ msg: 'Internal Server Error' });
    }
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
