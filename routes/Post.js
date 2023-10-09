const router = require('express').Router();
const multer  = require('multer')
const { addPost, getPosts } = require("../controllers/Post");
const jwtVerify = require('../middleware/jwtMiddleware');
const upload = multer({ dest: 'uploads/' })

router.post('/',[jwtVerify, upload.single('image')], async(req, res) => {
    try {
        console.log({body1: req.user});
        
        let response = await addPost(req.body, req.user.userId, req.file);
        

        console.log({file:  req.file});
        res.json(response);
    } catch (error) {
        console.log(error);
    }
});
router.get('/', jwtVerify, async(req, res) => {
    try {
        let response = await getPosts();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;