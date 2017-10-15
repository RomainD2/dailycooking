import React from 'react';
const styles = { /*Style dans le js, permet d'avoir un composant avec le style d'inclus*/
    boutonRecette:{
        backgroundColor:'blue'
    },
    imageRecette:{
        width:'100px'
    }
};

const Card = ({recette}) => {
    const {image, nom, descriptif} = recette;
    return (
        <div className="card">
            <div className="image">
                <img style={styles.imageRecette} src={image} alt={nom} />
            </div>
            <div className="recette">
                <h2>{nom}</h2>
                <p>{descriptif}</p>
            </div>
            <a className="btn btn-default recette-btn" style={styles.boutonRecette}>Voir la recette</a>
        </div>
    )
}

export default Card;