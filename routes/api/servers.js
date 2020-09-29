const express = require('express');
const asyncHandler = require('express-async-handler');
const { Server_users, User, Server } = require('../../db/models')

const router = express.Router();

router.get('/:username', asyncHandler( async (req, res, next) => {
    const username = req.params.username;
    const user = await User.findOne({
        where: { username }
    })
    const user_id = user.dataValues.id;

    const serversUsersList = await Server_users.findAll({ where: { user_id }});
    const serverIdList = serversUsersList.map(server => server.dataValues.server_id)
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

module.exports = router;