// api
const Router = require('koa-router');
const userController = require('../controllers/userController');
const articleController = require('../controllers/articleController');
const questionController = require('../controllers/questionController');
const recruitController = require('../controllers/recruitController');
const profileController = require('../controllers/profileController');
const commentController = require('../controllers/commentController');
const answerController = require('../controllers/answerController');
const sessionController = require('../controllers/sesstionController');
const watchController = require('../controllers/watchController');
const adminController = require('../controllers/adminController');

let router = new Router();

router.post('/signup', userController.SignUp);
router.post('/login', userController.Login);
router.get('/currentuser', userController.getCurrentUser);
router.get('/getUserInfo', userController.getUserInfo);

router.get('/article/list', articleController.getAllArtcle);
router.post('/article/add', articleController.addArtcle);
router.delete('/article/delete', articleController.delArtcle);
router.get('/article/get', articleController.getAnArticle);
router.post('/article/update', articleController.updateArtcle);
router.get('/article/recommended', articleController.recommendedArticles);

router.get('/question/list', questionController.getAllQuestion);
router.post('/question/add', questionController.addQuestion);
router.delete('/question/delete', questionController.delQuestion);
router.get('/question/get', questionController.getAnQuestion);
router.get('/question/recommended', questionController.recommendedQuestions);

router.get('/recruit/list', recruitController.getAllRecruit);
router.post('/recruit/add', recruitController.addRecruit);
router.delete('/recruit/delete', recruitController.delRecruit);
router.get('/recruit/get', recruitController.getAnRecruit);

router.post('/updateProfile', profileController.updateProfile);

router.get('/comment/list', commentController.allComment);
router.post('/comment/add', commentController.addComment);

router.get('/answer/list', answerController.allAnswer);
router.post('/answer/add', answerController.addAnswer);

router.get('/watchs', watchController.allWatchs);
router.post('/watch/toggle', watchController.toggle);

router.get('/admin/list', adminController.objList);
router.get('/ad/list', adminController.getAd);
router.post('/admin/ad/add', adminController.addAd);
router.post('/admin/ad/update', adminController.updateAd);
router.get('/admin/user', adminController.adminUser);

router.delete('/logout', sessionController.logout);


module.exports = router