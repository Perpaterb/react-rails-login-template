import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from "axios";

const Login = () => {

    //console.log("Login page ", localStorage.getItem('jwt'))

    const responseSuccessGoogle = (response) => {
        //console.log("profileObj ",response.profileObj);
        axios({
            method: 'POST',
            url: 'http://localhost:4000/googlelogin',
            data: response.profileObj,
        }).then(serverResponse => {
            //console.log("Susses ",serverResponse)
            localStorage.setItem('jwt', serverResponse.data.jwt)
            localStorage.setItem('imageUrl', serverResponse.data.imageUrl)
            localStorage.setItem('name', serverResponse.data.name)
            localStorage.setItem('email', serverResponse.data.email)
            window.location.reload(false)
        });
    }


    return (
        <div>
            <GoogleLogin 
                clientId="460704800898-qfm4o3f6ug2orf4870k47at45k2v7kse.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={(r) => {responseSuccessGoogle(r)}} 
                onFailure={err => console.log('fail', err)} 
                //isSignedIn={true}
                //cookiePolicy={'single_host_origin'}
            />
        </div>
    );
};

export default Login;