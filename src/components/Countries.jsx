import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([])
    const [rangeValue, setRangeValue] = useState(36);
    const [selectedRadio,setSelectedRadio] = useState("")
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"]
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
            
            {radios.map((continent)=>(<li>
                <input type="radio" id={continent} name="continentRadio" checked={continent === selectedRadio} onChange={(e)=>setSelectedRadio(e.target.id)}/>
                <label htmlFor={continent}>{continent}</label>
            </li>))}
            </ul>
            {selectedRadio && (<button onClick={()=>setSelectedRadio("")}>Réinitialiser</button>)}
            <ul>
                {/* quand on a pas de key unique, on passe un index */}
                {data
                .filter((country)=>country.continents[0].includes(selectedRadio))
                .sort((a,b)=>b.population - a.population) 
                .slice(0,rangeValue)
                .map((country, index)=> (<Card key={index} country={country} />))}
            </ul>
        </div>
    );
};

export default Countries;