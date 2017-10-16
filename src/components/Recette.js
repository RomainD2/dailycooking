import React from 'react';
import recettes from '../recettes_datas';

const Recette = ({match}) => {
    const recette = recettes[match.params.id];
    console.log(recette);
    return (
        <div className="card">
            {match.params.id}
        </div>
    )
}

export default Recette;