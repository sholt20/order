export const CREATE_POST = 'CREATE_POST';
export const GET_POSTS = 'GET_POSTS'

export const createPost = (message) => ({
    type: CREATE_POST,
    message
})

export const getPosts = (posts, channelId) => ({
    type: GET_POSTS,
    posts
})

export const sendMessage = (message) => async (dispatch) => {
    // const res = await fetch(`/api/${channelId}`)
}

export const getMessages = (channelId) => async (dispatch) => {
    const res = await fetch(`/api/posts/channel/${channelId}`)
    if (res.ok) {
        const { posts } = await res.json()
        dispatch(getPosts(posts, channelId))
    }
}