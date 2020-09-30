import React, { useEffect } from 'react';
import { matchPath, useLocation, useParams, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Posts = ({ serverId }) => {
    const channelId = useParams()
    // console.log(channelId)
    const location = useLocation()
    console.log(location)
    // console.log(channelId)
    useEffect(() => {
        // console.log(channelId)
    }, [channelId])

    return (
        <p>Filler</p>
    )
}

export default withRouter(Posts);