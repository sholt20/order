import React, { useEffect, useState } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import ChannelsList from './ChannelsList';

const OrderApp = ({ username }) => {
    const [servers, setServers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/api/servers/${username}`);
            const responseData = await response.json();
            setServers(responseData.servers);
        }
        fetchData();
    }, [username]);

    return (
        <BrowserRouter>
            <ul>
                <li><NavLink to={`/app/${username}/dm`}>DMs</NavLink></li>
                {servers.map(server => (
                    <li key={server.id}>
                        <NavLink to={`/app/${server.id}/:channelId`}>{server.name}</NavLink>
                    </li>))}
            </ul>
            <Switch>
                <Route path={`/app/${username}/dm`}>
                    <p>DMs live here</p>
                </Route>

                <Route path={"/app/:serverId/:channelId"}>
                    <ChannelsList username={username} />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default OrderApp;