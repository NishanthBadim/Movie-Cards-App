import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@material-ui/core/Button"
import { makeStyles, createMuiTheme } from "@material-ui/core";
import { Typography } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: 'column',
        color: "white",
    },
    btn: {
        backgroundColor: 'white',
        color: 'green',
        fontWeight: 'bold',
    }
})

const LogoutButton = () => {
    const { user, logout } = useAuth0();
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography>Welcome, <h5><em>{user.name}</em></h5></Typography>
            <Button className={classes.btn} onClick={() => logout()}
                variant="contained"
            >
                Log Out
                </Button>
        </div>
    )
};

export default LogoutButton;