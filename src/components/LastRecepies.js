import React, { Component } from 'react';
import {getLastRecepies} from '../utils/utils'


const CardLastRecepies = ({recette}) => {
    const {image, nom, descriptif} = recette;
    return (
        <div className="card">
            <div className="image">
                <img src={image} alt={nom} />
            </div>
            <div className="recette">
                <h2>{nom}</h2>
                <p>{descriptif}</p>
            </div>
            <a  href={nom} className="btn btn-default recette-btn" >Voir la recette</a>
        </div>
    )
}

const LastRecepies =({recettes}) => {
    const cards = getLastRecepies(recettes)
      .map((recette) => <CardLastRecepies key={recette.id} recette={recette} />)

    return (

      <div>
          {cards}
      </div>

    );
}

export default LastRecepies;