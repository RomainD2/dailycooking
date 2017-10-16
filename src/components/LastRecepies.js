import React, { Component } from 'react';
import recettes from '../recettes_datas';

/* Fonction pour prendre les 4 dernieres recettes avec le filter, et le sort permet de retourner le tableau*/
function getLastRecepies(recettes) {
    return recettes
    .filter(recette => recette.id>(recettes.length-5))
    .sort((ra,rb) => (rb.id-ra.id))
}

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

class LastRecepies extends Component {
  render() {

    const cards = getLastRecepies(recettes)
      .map((recette, key) => <CardLastRecepies key={key} recette={recette} />)

    return (

      <div>
          {cards}
      </div>

    );
  }
}

export default LastRecepies;