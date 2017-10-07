import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="image">
                    <img src={this.props.details.image} alt={this.props.details.nom} />
                </div>
                <div className="recette">
                    <h2>{this.props.details.nom}</h2>
                    <p>{this.props.details.descriptif}</p>
                </div>
                <a class="btn btn-default recette-btn">Voir la recette</a>
            </div>
        )
    }
}

export default Card;