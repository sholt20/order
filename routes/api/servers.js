const express = require('express');
const asyncHandler = require('express-async-handler');
const { Server_users, User, Server, Channel } = require('../../db/models')
const { Op } = require('sequelize')

const router = express.Router();

router.get('/:username', asyncHandler( async (req, res, next) => {
    const username = req.params.username;
    const user = await User.findOne({
        where: { username }
    })
    const user_id = user.dataValues.id;

    const serversUsersList = await Server_users.findAll({ where: { user_id }});
    const serverIdList = serversUsersList.map(server =>  {
        if (!server) {

        } else {
           return server.dataValues.server_id
        }
    })
    const getServer = async (id) => await Server.findByPk(id);

    const serverList = async serverIdList => {
        return Promise.all(
            serverIdList.map(async id => await getServer(id))
        )
    }

    const temp = await serverList(serverIdList);
    const servers = temp.map(server => server.dataValues)
    res.json({ servers })
}));


router.get('/server/:serverId', asyncHandler( async (req, res, next) => {
    const server_id = req.params.serverId;
    if (isNaN(parseInt(server_id, 10))) {

    } else {

        const server = await Server.findByPk(server_id);
        const channels = await Channel.findAll({
            where: { server_id }
        })

        res.json({ server, channels })
    }
}))

router.get('/join/:username', asyncHandler( async (req, res, next) => {
    const username = req.params.username;
    if (!username) return;
    const user = await User.findOne({
        where: { username }
    });
    const user_id = user.dataValues.id;

    const joinedServers = await Server_users.findAll({
        where: { user_id },
        limit: 50
    })

    const joinedIds = joinedServers.map(server => {
        if (!server) {

        } else {
            return server.dataValues.server_id
        }
    })

    const serverList = await Server.findAll({ where: { id: {[Op.not]: [...joinedIds]} }})

    res.json({ serverList })
}));


router.post('/join/:username/:serverId', asyncHandler( async (req, res, next) => {
    const { username, serverId } = req.params;
    if (!username || !serverId) return;

    const user = await User.findOne({
        where: { username }
    });

    const user_id = user.dataValues.id;

    const server = await Server.findOne({
        where: { id: parseInt(serverId, 10)}
    })

    if (!server) return;

    const newJoin = await Server_users.create({
        user_id,
        server_id: serverId,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    res.json({ server })
}));

module.exports = router;