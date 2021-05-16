import React from 'react';
import { makeStyles } from '@material-ui/core';
import LogoutButton from './../LogoutButton'

const useStyles = makeStyles({
    root: {
        height: "103px",
        backgroundImage: "url(data:image/jpeg;base64,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);",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
})
const Header = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="container">
                <nav className="header navbar">
                    <div className="row m-auto"><br /><br /><br />
                        <i className="fa fa-film fa-2x text-white my-auto"></i>
                        <div className="h3 ml-3 my-auto text-light">{props.title}</div>
                    </div>
                    {//<LogoutButton />
                    }
                </nav>
            </div>
        </div>
    )
}


export default Header;