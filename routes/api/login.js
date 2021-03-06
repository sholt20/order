const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const { User } = require('../../db/models')
const generateToken = require('../auth-utils');
const bcrypt = require('bcryptjs');

const router = express.Router();

const username =
    check('username')
        .not().isEmpty()
        .withMessage('Please enter a username');

const password =
    check('password')
        .not().isEmpty()
        .withMessage('Please enter a password');


const validatePassword = async (user, password) => {
    return bcrypt.compareSync(password, user.hashed_password.toString())
}
router.put('/', username, password, asyncHandler(async (req, res, next) => {
    const { username, password } = req.body;


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next({ status: 422, errors: errors.array() });
    }

    const user = await User.findOne({
        where: { username }
    });

    const validPassword = await validatePassword(user, password);

    if (!validPassword) {
        return next({ status: 401, errors: ["Credentials do not match"]});
    }
    const { jwtid, token } = generateToken(user);
    res.json({ token, user });
}));

module.exports = router;