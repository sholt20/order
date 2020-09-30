import React, { useEffect } from 'react';
import { BrowserRouter, NavLink, useParams, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadServer } from '../actions/serverActions';
import Posts from './Posts';

const ChannelsList = () => {
    const channels = useSelector(state => state.servers.channels)
    let { serverId } = useParams()
    const dispatch = useDispatch();

    // const handleClick = () => {
    //     console.log(serverId)
    //     dispatch(loadServer(serverId))
    // }

    useEffect(() => {
        dispatch(loadServer(serverId))
    }, [serverId])

    return (
        <BrowserRouter>
            <ul>
                {channels.map(channel => (
                    <li key={channel.id}>
                        <NavLink to={`/app/${serverId}/${channel.id}`}>{channel.name}</NavLink>
                    </li>
                ))}
            </ul>
            <Route to={`/app/${serverId}/:channelId`}>
                <Posts />
            </Route>

        </BrowserRouter>
    )
}

export default ChannelsList;