import { Avatar, IconButton } from '@material-ui/core';
import MoreVert from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import AttachFile from '@material-ui/icons/AttachFile';
import React, { useEffect, useState } from 'react';
import './Chat.css';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom';
import { db } from './firebase';

const Chat = () => {

    const [seed, setseed] = useState("");
    const [input, setinput] = useState("");
    const { roomId } = useParams();
    const [roomName, setroomName] = useState("");

    useEffect(() => {
        if(roomId)
        {
            db.collection("rooms").doc(roomId).onSnapshot((snapshot) => 
            (
                setroomName(snapshot.data().name)
            ))
        }
    }, [roomId])

    useEffect(() => {
        setseed(Math.floor(Math.random() * 5000));
    }, [roomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input);
        setinput("");
    };

    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className='chat_headerInfo'>
                    <h3>{roomName}</h3>
                    <p>Last seen....</p>
                </div>

                <div className='chat_headerRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className='chat_body'>
                <p className={`chat_message ${true && "chat_receiver"}`}>
                    <span className='chat_name'>Rahul
                    </span>
                    Hey Guys
                    <span className='chat_timestamp'>
                        3:52 pm
                    </span>
                </p>
            </div>

            <div className='chat_footer'>
                <InsertEmoticonIcon />
                <form>
                    <input 
                        type="text" 
                        placeholder='Type a message'
                        value={input}
                        onChange={(e) => setinput(e.target.value)}
                    />
                    <button type='sumbit' onClick={sendMessage}>Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    );
}

export default Chat;
