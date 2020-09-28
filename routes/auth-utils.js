const jwt = require('jsonwebtoken');
const { jwtConfig: { secret, expiresIn }} = require('../config/index');
const uuid = require('uuid').v4;

function generateToken(user) {
    const jwtid = uuid();

    return {
        jwtid,
        token: jwt.sign({ user }, secret, { expiresIn: Number.parseInt(expiresIn), jwtid })
    }
}

module.exports = generateToken;