const express = require('express');
const asyncHandler = require('express-async-handler');
const { Server_users, User, Server, Channel } = require('../../db/models')

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
    console.log(req.params)
    console.log('here')
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
module.exports = router;