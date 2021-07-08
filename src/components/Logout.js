import React from 'react';
import axios from "axios";
import GoogleLogout from 'react-google-login';
//import Button from '@material-ui/core/Button';

const Logout = () => {
    
    const responseSuccessGoogle = () => {
        //console.log("Logout", localStorage.getItem('email'));
        var formData = new FormData();
        formData.append("email", localStorage.getItem('email'))

        axios({
            method: 'PUT',
            url: 'http://localhost:4000/googlesign_out',
            data: formData,
        }).then(serverResponse => {
            //console.log("logout ",serverResponse)
            localStorage.setItem('jwt', undefined)
            localStorage.setItem('imageUrl', undefined)
            localStorage.setItem('name', undefined)
            localStorage.setItem('email', undefined)
            window.location.reload(false)
        });
    }
  
    return (
        <GoogleLogout
            clientId="460704800898-qfm4o3f6ug2orf4870k47at45k2v7kse.apps.googleusercontent.com"
            buttonText="Logout"
            onSuccess={responseSuccessGoogle}
            onFailure={err => console.log('fail', err)}
            //isSignedIn={false}
        />
    );
};

export default Logout;