import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <h1>A propos</h1>
            <br />
            <p>Bienvenue sur notre page internet dédiée à la découverte des pays du monde ! Ici, vous trouverez une liste complète des pays du monde avec leurs capitales respectives et des informations intéressantes sur chacun d'entre eux. Vous pourrez en apprendre davantage sur la géographie, l'histoire, la culture, la population, l'économie et bien plus encore de chaque pays. <br/>Que vous soyez un voyageur passionné ou simplement curieux de découvrir le monde, notre site vous offrira une mine d'informations utiles pour élargir vos horizons et mieux comprendre la diversité du monde qui nous entoure. Alors, n'hésitez plus et commencez votre voyage de découverte dès maintenant !</p>
            <br />
            <h3>Le saviez-vous?</h3>

            <p>Il existe actuellement 195 pays dans le monde, chacun ayant sa propre histoire, sa propre culture et ses particularités uniques.

            <br/>Saviez-vous que le Bhoutan, petit pays d'Asie, mesure le bonheur de sa population en utilisant un indice de bonheur national brut (BNB) plutôt qu'un produit intérieur brut (PIB) ? Une initiative insolite qui a valu au Bhoutan le surnom de "pays du bonheur".

            <br/>Le Vatican, également connu sous le nom de Saint-Siège, est le plus petit pays du monde en termes de superficie, ne couvrant qu'une superficie d'environ 44 hectares. À l'inverse, la Russie est le plus grand pays du monde, couvrant plus de 17 millions de km².</p>
        </div>
    );
};

export default About;