const { Router } = require('express');
const { deletePostIdController } = require('../controllers/deletePostIdController');
const { deleteUserIdController } = require('../controllers/deleteUserIdController');
const { getCategoriesController } = require('../controllers/getCategoriesController');
const { getPostCategoriesController } = require('../controllers/getPostCategoriesController');
const { getPostCategoriesIdController } = require('../controllers/getPostCategoriesIdController');
const { getPostSearchController } = require('../controllers/getPostSearchController');
const { getUserController } = require('../controllers/getUserController');
const { getUserIdController } = require('../controllers/getUserIdController');
const { loginController } = require('../controllers/login.controller');
const { postCategoriesController } = require('../controllers/postCategoriesController');
const { postPostCategoriesController } = require('../controllers/postPostCategoriesController');
const { putPostCategoriesController } = require('../controllers/putPostCategoriesController');
const { UserRegisterController } = require('../controllers/UserRegisterController');
const loginValidation = require('../middlewares/requestLogin');
const { tokenValidation } = require('../middlewares/tokenFunction');
const { 
  userRegisterValidation,
} = require('../middlewares/Zod/UserRegisterValidation/UserRegisterValidation');

const login = Router();

login.get('/post/search', tokenValidation, getPostSearchController);

login.post('/login', loginValidation, loginController);

login.post('/user',
  (request, response, next) => userRegisterValidation
    .validate(request, response, next),
  UserRegisterController);

login.get('/user', tokenValidation, getUserController);

login.get('/user/:id', tokenValidation, getUserIdController);

login.post('/categories', tokenValidation, postCategoriesController);

login.get('/categories', tokenValidation, getCategoriesController);

login.post('/post', tokenValidation, postPostCategoriesController);

login.get('/post', tokenValidation, getPostCategoriesController);

login.get('/post/:id', tokenValidation, getPostCategoriesIdController);

login.put('/post/:id', tokenValidation, putPostCategoriesController);

login.delete('/post/:id', tokenValidation, deletePostIdController);

login.delete('/user/me', tokenValidation, deleteUserIdController);

module.exports = { login };