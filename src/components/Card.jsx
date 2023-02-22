import React from 'react';

const Card = ({country}) => {
    console.log(country)
    return (
        <li className='card'>
            <img className='flags' src={country.flags.png} alt={"drapeau" + country.name.common} />
            <div className='infos'>
                <h2>{country.name.common}</h2>

            </div>
            
        </li>
    );
};

export default Card;