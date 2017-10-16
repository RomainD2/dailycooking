import React, { Component } from 'react';
import recettes from '../recettes_datas';

/* Je vais me faire fâcher, mais je ne vois pas comment faire autrement qu'une boucle for! Je suis sûr qu'il y a mieux! C'est même dégueulasse, mais ça fonctionne lol*/
var lastRecettes = [];
for (var i = (recettes.length-1); i > (recettes.length-5); i--) {
    lastRecettes.push(recettes[i]);
}

/* Est ce que je met les datas sur fireBase ???*/

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
  state = {
    lastRecettes: lastRecettes
  };
  
  render() {

    const cards = this.state.lastRecettes
      .map((recette, key) => <CardLastRecepies key={key} recette={recette} />)

    return (

      <div>
          {cards}
      </div>

    );
  }
}

export default LastRecepies;