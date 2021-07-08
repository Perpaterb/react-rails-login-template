import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Login from "./Login";
import Logout from "./Logout";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const imgStyle = {
    width: '40px', 
    height: '40px',
    borderRadius: '50%',
    padding: 10,
    //boxShadow: "0px 10px 20px #00000060",
}

const LogQ = () => {

    const classes = useStyles();

    if (localStorage.getItem('jwt') === null) {
        localStorage.setItem('jwt', undefined)
        localStorage.setItem('imageUrl', undefined)
        localStorage.setItem('name', undefined)
        localStorage.setItem('email', undefined)
    }

    const userJwt = localStorage.getItem('jwt')
    const userName = localStorage.getItem('name')
    const userimageUrl = localStorage.getItem('imageUrl')

    //console.log(localStorage.getItem('jwt'))

    if (userJwt === "undefined") {

        return (
            <Toolbar>
                <Login/>
            </Toolbar>
        );

    } else {

        return (
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    {userName}
                </Typography>
                <img src={userimageUrl} style={imgStyle} alt={"googleimageUrl"} />
                <Logout/>
            </Toolbar>
        );

    }

};

export default LogQ;