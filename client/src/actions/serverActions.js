export const CHANGE_SERVER = 'CHANGE_SERVER';

export const changeServer = (channels, server) => ({
    type: CHANGE_SERVER,
    server,
    channels
})

export const loadServer = (serverId) => async (dispatch) => {
    if (Number.isNaN(parseInt(serverId, 10))) {

    } else {
        const response = await fetch(`/api/servers/server/${serverId}`)
        if (response.ok) {
            const { channels, server } = await response.json();
            dispatch(changeServer(channels, server));
        }
    }
}