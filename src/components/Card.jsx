import React from 'react';

const Card = ({country}) => {
    return (
        <li className='card'>
            <img className='flags' src={country.flags.png} alt={"drapeau" + country.name.common} />
            <div className='infos'>
                <h2>{country.translations.fra.common}</h2>
                <h5>{country.capital}</h5>
                {/* toLocaleString() permet de séparer les milliers */}
                <p>{"pop. " + country.population.toLocaleString() }</p>

            </div>
            
        </li>
    );
};

export default Card;