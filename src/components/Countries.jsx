import React, { useEffect, useState } from 'react';
import axios from "axios";

const Countries = () => {
    const [data, setData] = useState([])
    // const [hello, setHello] = useState("Hello les amis")

    // le useEffect se joue lorsque le composant est monté
    useEffect(()=>{
axios.get("https://restcountries.com/v3.1/all")
    .then((response)=>setData(response.data));
    }, [])
    return (
        <div className='countries'>
            <h1>COUNTRIES</h1>
            <ul>
                {/* quand on a pas de key unique, on passe un index */}
                {data.map((country, index)=> <li key={index}>{country.name.common}</li>)}
            </ul>
        </div>
    );
};

export default Countries;