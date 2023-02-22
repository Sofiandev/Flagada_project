import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([])
    const [rangeValue, setRangeValue] = useState(36);
    const 
    // const [hello, setHello] = useState("Hello les amis")

    // le useEffect se joue lorsque le composant est monté
    useEffect(()=>{
axios.get("https://restcountries.com/v3.1/all")
    .then((response)=>setData(response.data));
    }, [])
    return (
        <div className='countries'>
            <h1>PAYS DU MONDE</h1>
            <ul className="radio-container">
                <input type="range" min="1" max="250" defaultValue={rangeValue} onChange={(e)=>setRangeValue(e.target.value)}/>
            </ul>
            <ul>
                {/* quand on a pas de key unique, on passe un index */}
                {data
                .slice(0,rangeValue)
                .map((country, index)=> (<Card key={index} country={country} />))}
            </ul>
        </div>
    );
};

export default Countries;