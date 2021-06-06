import React from "react";
import { useParams } from "react-router-dom";
import CityDetails from "../components/CityDetails/CityDetails";
import Header from "../components/Header/Header";

function Details ()
{
    const { city_id } = useParams();
    
    return (
        <>
            < Header/>
            < CityDetails city_id={city_id}/>
        </>
    )
}

export default Details;