// api
const Router = require('koa-router');
const userController = require('../controllers/userController');
const articleController = require('../controllers/articleController');
const questionController = require('../controllers/questionController');
const recruitController = require('../controllers/recruitController');
let router = new Router();

router.post('/signup', userController.SignUp);
router.post('/login', userController.Login);
router.get('/currentuser', userController.getCurrentUser);


router.get('/article/list',articleController.getAllArtcle);
router.post('/article/add',articleController.addArtcle);
router.delete('/article/delete',articleController.delArtcle);
router.get('/article/get',articleController.getAnArticle);
router.post('/article/update',articleController.updateArtcle);

router.get('/question/list',questionController.getAllQuestion);
router.post('/question/add',questionController.addQuestion);
router.delete('/question/delete',questionController.delQuestion);
router.get('/question/get',questionController.getAnQuestion);

router.get('/recruit/list',recruitController.getAllRecruit);
router.post('/recruit/add',recruitController.addRecruit);
router.delete('/recruit/delete',recruitController.delRecruit);
router.get('/recruit/get',recruitController.getAnRecruit);


module.exports = router