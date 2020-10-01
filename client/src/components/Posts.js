import React, { useEffect, useRef } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../actions/postActions'

const Posts = ({ serverId }) => {
    const { channelId } = useParams()
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)

    useEffect(() => {
        dispatch(getMessages(channelId))
    }, [channelId])

    return (
        <div> {
            isNaN(parseInt(channelId, 10))
                ? null
                : <ul>{
                    posts.map(post => <div key={post.id}>
                        <p>{post.author_name}</p><p>{post.message}</p>
                    </div>)
                }</ul>
            }
        </div>
    )
}

export default withRouter(Posts);