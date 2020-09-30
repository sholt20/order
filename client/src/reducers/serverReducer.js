import { CHANGE_SERVER } from '../actions/serverActions';

const initialState = {
    serverId: null,
    channels: [],
    serverName: null,
}

const serverReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_SERVER: {
            const newChannels = [...action.channels]
            return {
                ...state,
                serverId: action.server.serverId,
                channels: newChannels,
                serverName: action.server.name
            }
        }
        default: return state;
    }
}

export default serverReducer;