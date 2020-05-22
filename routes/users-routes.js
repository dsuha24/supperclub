const express = require('express');
// const HttpError = require('../models/http-error');
const usersControllers = require('../controllers/users-controllers');
const fileUpload = require('../middleware/file-upload');
const { check } = require('express-validator');

const router = express.Router();

router.get('/', usersControllers.getUsers);

router.get('/:uid', usersControllers.getUsersById);

router.post(
    '/signup',
    fileUpload.single('image'),
    [
        check('name').not().isEmpty(),
        // check('username').not().isEmpty(),
        check('email').not().isEmpty(),
        check('email').normalizeEmail().isEmail(),
        check('password').isLength({min: 6})
    ], 
    usersControllers.signup
);

router.post(
    '/login',
    [
        // check('name').not().isEmpty(),
        // check('username').not().isEmpty(),
        check('email').not().isEmpty(),
        check('email').normalizeEmail().isEmail(),
        check('password').isLength({min: 6})
    ], 
    usersControllers.login);

router.patch('/:uid', usersControllers.updateUser);

module.exports = router;