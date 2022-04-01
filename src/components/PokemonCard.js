import React from "react";

const PokemonCard = props => {

    return (
        <div className="card border-light " style={{ backgroundColor: 'rgba(226, 250, 226, 0.548)' }}>
            <div className="row g-0">
                <div className="col-md-7">
                    <img src={props.imageUrl} width='600' className="img-fluid rounded-start" alt={props.name} />
                </div>
                <div className="col-md-5 gradient">
                    <div className="card-body text-center" >
                        <h2 className="card-title">{props.name}</h2>
                        <p className="card-text">Peso: {props.weight}</p>
                        <p className="card-text">Tipo: {props.type}</p>
                        <h3 className="card-title">Habilidades especiales:</h3>
                        <ul className="list-unstyled">
                            {props.abilities.map(ability => <li key={ability.ability.name}>{ability.ability.name}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard;