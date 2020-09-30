import React, { useEffect } from 'react';
import { BrowserRouter, NavLink, Redirect, Switch, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Posts = () => {
    const { channelId } = useParams();
    console.log(useParams())
    useEffect(() => {
        console.log(channelId)
    }, [channelId])

    if (!channelId) {
        return null;
    } else {
        return (
            <p>In channel {channelId}</p>
        )
    }
}

export default Posts;