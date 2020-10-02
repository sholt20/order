import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Join = ({ setServers, servers }) => {
    const username = useSelector(state => state.auth.currUser);
    const [unjoined, setUnjoined] = useState([])

    const handleJoin = (e) => {
        async function joinServer() {
            const res = await fetch(`/api/servers/join/${username}/${e.target.id}`, {
                method: 'post',
                body: JSON.stringify({}),
                headers: {
                    "Content-Type":"application/json"
                }
            });

            if (res.ok) {
                const { server } = await res.json()
                setServers([...servers, server])
            }
        }
        joinServer()
    }

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`/api/servers/join/${username}`)
            const { serverList } = await res.json()
            console.log(serverList)
            setUnjoined(serverList)
        }
        fetchData()
    }, [servers])

    return (
        <ul>
            {unjoined.map(server => <button className="join-button" key={server.id} id={server.id} onClick={handleJoin}>
                {server.name}
            </button>)}
        </ul>
    )
}

export default Join;