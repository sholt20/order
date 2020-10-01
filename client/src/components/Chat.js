import React, { useEffect, useState } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from  '../actions/postActions';
import socketIOClient from 'socket.io-client';


const Chat = ({ channelId, posts }) => {
    const dispatch = useDispatch()
    const [messageText, setMessageText] = useState('')
    const socket = socketIOClient('http://localhost:3000')
    const username = useSelector(state => state.auth.currUser)

    const handleChange = (e) => {
        setMessageText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        socket.emit('chatMessage', `${messageText} from ${username}`)
        dispatch(sendMessage(messageText, channelId, username))
    }

    useEffect(() => {
        socket.on('message', data => {
            console.log(data)
        })
    }, [channelId])

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <textarea onChange={handleChange} />
                <button type="submit">Send</button>
            </div>

        </form>
    )
}

export default Chat;