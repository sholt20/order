import { GET_POSTS, CREATE_POST } from '../actions/postActions';

const initialState = {
    posts: [],
    channelId: null
}

const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POSTS: {
            console.log('in action', action)
            const newPosts = [...action.posts]
            const channelId = action.channelId
            return {
                posts: newPosts,
                channelId
            }
        }

        case CREATE_POST: {
            const newPosts = [...state.posts, action.message.newPost]

            return {
                ...state,
                posts: newPosts,
                channelId: action.channelId
            }
        }
        default: return state;
    }
}

export default postsReducer;