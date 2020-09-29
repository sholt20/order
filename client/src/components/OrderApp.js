import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const OrderApp = ({ username }) => {
    const [servers, setServers] = useState([]);
    console.log(username)

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/api/servers/${username}`);
            const responseData = await response.json();
            setServers(responseData.servers);
        }
        fetchData();
    }, []);

    return (
        <ul>
            {servers.map(server => <li key={server.id}>{server.name}</li>)}
        </ul>
    )
}

export default OrderApp;