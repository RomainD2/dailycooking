import React from 'react';
import { Link } from 'react-router-dom';

const styles = { /*Style dans le js, permet d'avoir un composant avec le style d'inclus, à voir par la suite comment je gère ça*/
    boutonRecette:{
        backgroundColor:'white'
    },
    imageRecette:{
        width:'100px'
    }
};

/* Comment faire pour retourner un truc présentable sous le formalisme de bootstrap? Car là, tout est à la suite et je souhaiterai les mettre l'une à côté de l'autre, 2 par 2!, je me demande si c'est possible car tout ce que j'ai vu était des cartes l'unes en dessous des autres*/
/* Comment faire pour attribuer une clé au lien href, là j'ai mis le nom! Et ensuite, comment router vers une 'nouvelle page', plutot remplacer le body par la recette sélectionnée, ayant cette clé?*/
/* Comment tu arrives à chercher ce genre d'infos sur le net?*/

const Card = ({recette}) => {
    const {image, nom, descriptif, id} = recette;
    return (
        <div className="card">
            <div className="image">
                <img style={styles.imageRecette} src={image} alt={nom} />
            </div>
            <div className="recette">
                <h2>{nom}</h2>
                <p>{descriptif}</p>
            </div>
            <Link to={`/recette/${id}`} className="btn btn-default recette-btn" style={styles.boutonRecette}>Voir la recette</Link>
        </div>
    )
}

export default Card;