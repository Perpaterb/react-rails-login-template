import React from 'react';
import GoogleLogout from 'react-google-login';

const Logout = () => {
    
    const responseSuccessGoogle = (response) => {
        console.log("Logout",response);
    }
    
    return (
        <div>
            <GoogleLogout
                clientId="460704800898-qfm4o3f6ug2orf4870k47at45k2v7kse.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={responseSuccessGoogle}
            />
        </div>
    );
};

export default Logout;