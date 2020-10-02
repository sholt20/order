import React, { useEffect, useState } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import ChannelsList from './ChannelsList';
import './css/orderapp.css'
import Join from './Join';

const OrderApp = ({ username }) => {
    const [servers, setServers] = useState([]);
    const [clicked, setClicked] = useState(false);

    const handleShow = () => {
        if (clicked) {
            setClicked(false)
        } else {
            setClicked(true)
        }
    }

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
            <div className="app-container">
                <div className="servers-container">
                    <ul>
                        <li className="dm-link"><NavLink to={`/app/${username}/dm`}>DMs</NavLink></li>
                        {servers.map(server => (
                            <li key={server.id} className={`server server-${server.id}`}>
                                <NavLink to={`/app/${server.id}/:channelId`} activeClassName="active-server">
                                    {`${server.name}`}
                                </NavLink>
                            </li>))}
                    </ul>
                    <button onClick={handleShow}className="signup-button">Join A Server!</button>
                    {clicked ? <Join setServers={setServers} servers={servers}/> : null}
                </div>
                <Switch>
                    <Route path={`/app/${username}/dm`}>
                        <p>DMs would live here</p>
                    </Route>

                    <Route path={"/app/:serverId/:channelId"}>
                        <ChannelsList username={username} />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default OrderApp;