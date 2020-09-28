const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const { User } = require('../../db/models')
const generateToken = require('../auth-utils');

const router = express.Router();

const username =
    check('username')
        .not().isEmpty()
        .withMessage('Please enter a username');

const password =
    check('password')
        .not().isEmpty()
        .withMessage('Please enter a password');

router.put('/', username, password, asyncHandler(async (req, res, next) => {
    console.log('here');
    const { username, password } = req.body;
    console.log(username, password);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next({ status: 422, errors: errors.array() });
    }

    const user = await User.findOne({
        where: { username }
    });
    const { jwtid, token } = generateToken(user);
    res.json({ token, user });
}));

module.exports = router;