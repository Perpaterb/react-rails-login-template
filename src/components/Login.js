import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from "axios";

const Login = () => {

    const responseSuccessGoogle = (response) => {
        console.log("profileObj ",response.profileObj);
        axios({
            method: 'POST',
            url: 'http://localhost:4000/googlelogin',
            data: response.profileObj,
        }).then(response => {
            console.log("Login response from server ",response.config.data)
            console.log("Susses ",response)
        });

    }

    const responseFailureGoogle = (response) => {
        console.error("Fail",response);
    }

    return (
        <div>
            <GoogleLogin
                clientId="460704800898-qfm4o3f6ug2orf4870k47at45k2v7kse.apps.googleusercontent.com"
                buttonText="Login"
                // uxMode='redirect
                // redirectUri="http://localhost:3000"
                onSuccess={responseSuccessGoogle}
                onFailure={responseFailureGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
};

export default Login;