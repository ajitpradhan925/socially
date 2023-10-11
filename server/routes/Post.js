const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { addPost, getPosts } = require('../controllers/Post');
const jwtVerify = require('../middleware/jwtMiddleware');
const HttpStatusError = require('../utils/error-class');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = 'uploads/';
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => cb(null, `${Date.now()}${path.extname(file.originalname)}`),
});

const upload = multer({ storage, fileFilter: (req, file, cb) => cb(null, ['image/jpeg', 'image/png', 'image/gif'].includes(file.mimetype)) });

router.post('/', [jwtVerify, upload.single('image')], async (req, res) => {
  try {
    const response = await addPost(req.body, req.user.userId, req.file);
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
router.get('/', jwtVerify, async (req, res) => {
  try {
    const response = await getPosts();
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

module.exports = router;
