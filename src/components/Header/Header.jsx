import "./header.css";

import React from "react";

import logo from "../../images/viajae-small-logo.svg";
import { useHistory } from "react-router";

function Header ()
{
    const history = useHistory();

    return (
        <div id="header">
            <img className="small-logo" src={logo} alt="Viajaê"/>

            <p
                className="go-back-button"
                onClick={ () => history.goBack()}>
                Voltar</p>
        </div>
    )
}

export default Header