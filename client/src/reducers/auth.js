import {
    SET_TOKEN,
    REMOVE_TOKEN
} from '../actions/auth';

const initialState = {
    loggedIn: false,
    currUser: null,
    token: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TOKEN: {
            return {
                ...state,
                token: action.token,
                loggedIn: true,
                currUser: action.username
            };
        }

        case REMOVE_TOKEN: {
            const nextState = { ...state, loggedIn: false, currUser: null };
            delete nextState.token;
            return nextState;
        }

        default: return state;
    }
}

export default authReducer;