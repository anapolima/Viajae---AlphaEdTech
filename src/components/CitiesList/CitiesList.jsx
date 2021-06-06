import "./citiesList.css";

import React, { useEffect, useState } from "react";
import CityCard from "../CityCard/CityCard";

function CitiesList ()
{
    const [cities, setCities] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect( () =>
    {
        async function loadCities ()
        {
            const response = await fetch("https://my-json-server.typicode.com/srsantosdev/viajaefakeapi/cities");

            if (response.status !== 200)
            {
                setError(true);
                setLoading(false);
            }
            else
            {
                const data = await response.json();
                setError(false);
                setCities(data);
                setLoading(false);
            }
        }

        loadCities();
    }, []);

    if (loading)
    {
        return (
            <>
                <p className="loading">Carregando…</p>
            </>
        )
    }

    if (error)
    {
        return (
            <>
                <p className="error-message">Falha ao carregar lista de cidades.</p>
            </>
        )
    }

    return (
        <>
            <div id="cities-list">
                {cities.map((city) =>
                {
                    return < CityCard city={city} key={city.id}/>
                })}
            </div>
        </>
    )
}

export default CitiesList;
