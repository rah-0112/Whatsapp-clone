import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from './firebase';
import './SidebarChat.css';

const SidebarChat = ({ id, name, addNewChat }) => {

    const [seed, setseed] = useState("");

    useEffect(() => {
        setseed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter name for chat");

        if(roomName){
            db.collection("rooms").add({
                name: roomName,
            });
        }
    };

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className='sidebarChat'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className='sidebarChat_info'>
                    <h2>{name}</h2>
                    <p>Last Message...</p>
                </div>
            </div>
        </Link>
    ) : (
        <div 
            className='sidebarChat'
            onClick={createChat}
        >
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat;
