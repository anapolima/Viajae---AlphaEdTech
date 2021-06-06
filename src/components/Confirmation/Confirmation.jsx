import ".//confirmation.css";

import React from "react";
import logo from "../../images/viajae-biggest-logo.svg";
import { useHistory } from "react-router";

function Confirmation ()
{
    const history = useHistory()
    return (
        <>
            <div className="confirmation-conteiner">
                <img src={logo} alt="Viajaê" className="confirmation-logo"/>

                <p className="confirmation-text">
                    Confirmar visita?
                </p>

                <div className="confirmation-buttons">
                    <button
                        className="confirmation-button-no"
                        onClick={ ()=> history.goBack()}>
                        Cancelar</button>

                    <button
                        className="confirmation-button-yes"
                        onClick={ () => history.replace("/")}>
                        Confirmar</button>
                </div>
            </div>
        </>
    )
}

export default Confirmation