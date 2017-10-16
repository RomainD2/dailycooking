import React, { Component } from 'react';
import Card from './Card';
import recettes from '../recettes_datas';

class RecettesBody extends Component {
  state = {
    recettes: recettes
  };
  
  render() {

    const cards = this.state.recettes
      .map((recette, key) => <Card key={key} recette={recette} />)// Correspond à toutes nos cartes de recettes

    return (

      <div>
          {cards}
      </div>

    );
  }
}

export default RecettesBody;