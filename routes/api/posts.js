const express = require('express');
const asyncHandler = require('express-async-handler');
const { User, Channel, Post } = require('../../db/models');

const router = express.Router()

router.get('/channel/:channelId', asyncHandler( async (req, res, next) => {
    const channel_id = req.params.channelId;
    const channel = await Channel.findByPk(channel_id);
    if (!channel) {

    } else {
        const posts = await Post.findAll({
            where: { channel_id },
            limit: 50,
            order: [['createdAt', 'ASC']]
        });

        res.json({ posts })
    }
}));

router.post('/channel/:channelId', asyncHandler( async (req, res, next) => {
    const channel_id = parseInt(req.params.channelId, 10)
    const { message, username } = req.body
    if (!channel_id || !message || !username) {

    } else {
        const author = await User.findOne({ where: { username }})
        const author_id = author.dataValues.id
        const newPost = await Post.create({
            author_id,
            message,
            channel_id,
            author_name: username,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        res.json({ newPost })
    }
}))

module.exports = router;