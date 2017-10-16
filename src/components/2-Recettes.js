import React, { Component } from 'react';
import Card from './Card';

const Recettes = ({recettes}) => {
    const cards = recettes
        .map((recette, key) => (
            <div className="col-xs-6" style={{ height: '300px' }}>
                <Card key={key} recette={recette} />
            </div>
        )
        )// Correspond à toutes nos cartes de recettes

    return (

        <div className="row">
            {cards}
        </div>

    );
}

export default Recettes;