import React, { useEffect, useState } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, getMessages } from  '../actions/postActions';
import socketIOClient from 'socket.io-client';
const socketUrl = process.env.REACT_APP_WS_URL || 'http://disc-order.herokuapp.com';

const Chat = ({ channelId, posts }) => {
    const dispatch = useDispatch()
    const [messageText, setMessageText] = useState('')
    const socket = socketIOClient(socketUrl)
    const username = useSelector(state => state.auth.currUser)

    const handleChange = (e) => {
        setMessageText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        socket.emit('chatMessage', `${messageText} from ${username}`)
        dispatch(sendMessage(messageText, channelId, username))
    }

    socket.on('message', data => {
        const dataArr = data.split(' - ');
        const username = dataArr[0];
        const messageText = dataArr[1]
        dispatch(getMessages(channelId))
    })

    useEffect(() => {

    }, [channelId])

    return (
        <div className="chat-input-container">
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <textarea className="chat-box" onChange={handleChange} />
                    <button className="signup-button send-button" type="submit">Send</button>
                </div>

            </form>
        </div>
    )
}

export default Chat;