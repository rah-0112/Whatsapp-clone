import { Button } from '@material-ui/core';
import React from 'react'
import './Login.css';
import { GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [{} , dispatch] = useStateValue();

    const signIn = () => {
        const provider = new GoogleAuthProvider();
        auth
        .signInWithPopup(provider)
        .then( (result) => 
        dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        )
        .catch((error) => alert(error.message));
    };

    return (
        <div className='login'> 
            <div className='login_Container'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt='whatsapp_logo' />

                <div className='login_text'>
                    <h1>Sign in to Whatsapp</h1>
                </div>

                <Button
                     onClick={signIn}
                >
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login;
