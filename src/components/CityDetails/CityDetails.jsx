import "./cityDetails.css";

import React, { useEffect, useState } from "react";

import mapPin from "../../images/map-pin.svg";
import { useHistory } from "react-router";

function CityDetails({ city_id }) {
    const [city, setCity] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const history = useHistory();

    useEffect(() => {
        async function loadCityData() {
            const response = await fetch(`https://my-json-server.typicode.com/srsantosdev/viajaefakeapi/cities/${city_id}`);
            if (response.status !== 200) {
                setError(true);
                setLoading(false);
            }
            else {
                const data = await response.json();
                setCity(data);
                setError(false);
                setLoading(false);
            }
        }
        loadCityData();
    }, [city_id]);

    function goToConfirmation() {
        history.push("/confirm");
    }

    if (loading) {
        return (
            <>
                <p className="loading">Carregando…</p>
            </>
        );
    }

    if (error) {
        return (
            <>
                <p className="error-message">Falha ao carregar detalhes da cidade.</p>
            </>
        );
    }

    return (
        <>
            <div className="city-details-conteiner">
                <div
                    className="city-detail-image"
                    style={{ backgroundImage: `url(${city.image})` }}>
                </div>

                <div className="city-detail-header">
                    <div className="city-info">
                        <p
                            className="city-detail-name">
                            {city.name}</p>

                        <p
                            className="city-detail-state">
                            {city.state}</p>
                    </div>

                    <div className="confirm-visit">

                        <img src={mapPin} alt="Map Pin" className="place-icon" />

                        <p
                            className="confirm-visit-text"
                            onClick={goToConfirmation}>
                            Confirmar visita</p>
                    </div>
                </div>

                <div className="city-information">
                    <p
                        className="city-description">
                        {city.description}</p>
                </div>
            </div>
        </>
    );
}

export default CityDetails;
