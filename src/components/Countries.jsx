import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from './Card';

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
                {data.map((country, index)=> (<Card key={index} country={country} />))}
            </ul>
        </div>
    );
};

export default Countries;