import { combineReducers } from 'redux';
import auth from './auth';
import serverReducer from './serverReducer'
import postsReducer from './postsReducer'

const rootReducer = combineReducers({
    auth,
    servers: serverReducer,
    posts: postsReducer
});

export default rootReducer;