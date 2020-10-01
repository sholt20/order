import { GET_POSTS, CREATE_POST } from '../actions/postActions';

const initialState = {
    posts: [],
    channelId: null
}

const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POSTS: {
            const newPosts = [...action.posts]
            const channelId = action.channelId
            return {
                posts: newPosts,
                channelId
            }
        }
        default: return state;
    }
}

export default postsReducer;