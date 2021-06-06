import "./cityCard.css";

import React from "react";
import { useHistory } from "react-router";

function CityCard ({ city })
{
    const history = useHistory();

    function showCityDetails (city_id)
    {
        history.push(`/details/${city_id}`);
    }

    return (
        <>
            <div
                className="city-card"
                onClick={() => showCityDetails(city.id)}>
                <img className="city-card-image" src={city.image} alt={city.name}/>

                <p
                    className="city-card-name">
                    {city.name}</p>

                <p
                    className="city-card-state">
                    {city.state}</p>
            </div>
        </>
    )
}

export default CityCard
