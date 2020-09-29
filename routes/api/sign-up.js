const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const { User } = require('../../db/models')
const generateToken = require('../auth-utils');
const bcrypt = require('bcryptjs');

const router = express.Router();

const email =
    check('email')
        .not().isEmpty()
        .isEmail()
        .withMessage('Please provide a valid email');

const username =
    check('username')
        .not().isEmpty()
        .withMessage('Please enter a username');

const password =
    check('password')
        .not().isEmpty()
        .withMessage('Please enter a password');

router.post('/', email, username, password, asyncHandler( async (req, res, next) => {
    const {username, email, password } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return next({ status: 422, errors: errors.array() });
    }
    console.log(email, username, password)
    const hashed_password = await bcrypt.hashSync(password, 10);

    const newUser = await User.create({ username, email, hashed_password })

    const { token } = generateToken(newUser)
    res.json({ token, user: newUser });
}));

module.exports = router;