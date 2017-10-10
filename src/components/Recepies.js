import React, { Component } from 'react';
import Card from './Card';
import recettes from '../recettes_datas';
import NotFound from './NotFound';

/*
// Router
import {BrowserRouter, Match, Miss} from 'react-router';

// Composant pour le router
const RecipiePage = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern="/recette/:recette" component={Recepies}/>
                <Miss component={NotFound}/>
            </div>
        </BrowserRouter>
    )
}
*/

class Recepies extends Component {
  state = {
    recettes: recettes //Je charge toutes les recettes, c'est peut être pas la meilleure solution. Voir sur le cours Udemy pour faire une fonction de chargement des recettes
  };
  
  render() {

    const cards = this.state.recettes
    .map((recette, key) => <Card key={key} details={recette}/>)// Correspond à toutes nos cartes de recettes

    return (
      <div className="Recepies">
        {cards}
      </div>
    );
  }
}

export default Recepies;
