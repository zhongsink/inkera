// api
const Router = require('koa-router');
const userController = require('../controllers/userController');
let router = new Router();

router.post('/signup', userController.SignUp);
router.post('/login', userController.Login);


module.exports = router