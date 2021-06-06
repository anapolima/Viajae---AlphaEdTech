import "./login.css";

import React, { useState } from "react";

import logo from "../../images/viajae-big-logo.svg"
import { useHistory } from "react-router";

function Login ()
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const history = useHistory();

    function handleName (event)
    {
        setName(event.target.value);
    }

    function handleEmail (event)
    {
        setEmail(event.target.value);
    }

    function nextPage ()
    {
        if (email && name)
        {
            history.push("/cities");
        }
    }

    return (
        <>
            <div className="home-login-conteiner">

                <div className="home-big-logo">
                    <img src={logo} alt="Viajaê"/>
                </div>

                <div className="login-inputs">

                    <h1 className="home-title">Meus dados</h1>

                    <input
                        type="text"
                        name="name"
                        className="home-name-input"
                        placeholder="Nome"
                        onInput={(event) => handleName(event)}/>

                    { !name ? (<p className="obrigatory-field-message">Campo obrigatório</p>) : ""}

                    <input
                        type="text"
                        name="email"
                        className="home-email-input"
                        placeholder="E-mail"
                        onInput={(event) => handleEmail(event)}/>

                    { !email ? (<p className="obrigatory-field-message">Campo obrigatório</p>) : ""}

                    <button
                        className="check-available-cities"
                        onClick={() => nextPage()}>
                        Ver cidades disponíveis</button>
                </div>

            </div>
        </>
    )
}

export default Login;