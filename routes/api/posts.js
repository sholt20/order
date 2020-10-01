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
            order: [['createdAt', 'DESC']]
        });

        res.json({ posts })
    }
}))

module.exports = router;