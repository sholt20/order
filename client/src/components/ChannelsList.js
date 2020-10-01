import React, { useEffect } from 'react';
import { NavLink, useParams, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadServer } from '../actions/serverActions';
import Posts from './Posts';

const ChannelsList = () => {
    const channels = useSelector(state => state.servers.channels)
    let { serverId } = useParams()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadServer(serverId))
    }, [serverId])

    return (
        <>
            <ul>
                {channels.map(channel => (
                    <li key={channel.id}>
                        <NavLink to={`/app/${serverId}/${channel.id}`}>{channel.name}</NavLink>
                    </li>
                ))}
            </ul>

            <Switch>
                <Route to={`/app/${serverId}/:channelId`} render={() => <Posts serverId={serverId} /> } />
            </Switch>
        </>
    )
}

export default ChannelsList;