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

export const sendMessage = (message, channelId, username) => async (dispatch) => {
    const res = await fetch(`/api/posts/channel/${channelId}`, {
        method: 'post',
        body: JSON.stringify({ message, channelId, username }),
        headers: {
            "Content-Type":"application/json"
        }
    })
    if (res.ok) {
        const newPost = await res.json();
        console.log(newPost)
        dispatch(createPost(newPost))
    }
}

export const getMessages = (channelId) => async (dispatch) => {
    console.log(channelId)
    const res = await fetch(`/api/posts/channel/${channelId}`)
    if (res.ok) {
        const { posts } = await res.json()
        dispatch(getPosts(posts, channelId))
    }
}