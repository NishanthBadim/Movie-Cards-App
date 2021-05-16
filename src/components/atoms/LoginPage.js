import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core";
import { Typography } from '@material-ui/core'

const useStyles = makeStyles({
  cent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

  },
  root: {
    width: "250px",
    marginTop: "100"
  },
  text: {
    marginTop: "100"
  }
})
const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();
  const classes = useStyles();
  return (
    <div className={classes.cent}>
      <Typography className={classes.text} variant="h2">Welcome to Movie Cards App</Typography><br />
      <Button className={classes.root}
        onClick={() => loginWithRedirect()}
        variant="contained"
        color="primary">Log In / Sign Up</Button>
    </div>
  )
};

export default LoginPage;