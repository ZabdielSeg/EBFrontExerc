import React from "react";

const PokemonCard = props => {

    return (
        <div class="card border-light " style={{ backgroundColor: 'rgba(226, 250, 226, 0.548)' }}>
            <div class="row g-0">
                <div class="col-md-7">
                    <img src={props.imageUrl} width='600' className="img-fluid rounded-start" alt={props.name} />
                </div>
                <div class="col-md-5 gradient">
                    <div class="card-body text-center" >
                        <h2 class="card-title">{props.name}</h2>
                        <p class="card-text">Peso: {props.weight}</p>
                        <p class="card-text">Tipo: {props.type}</p>
                        <h3 class="card-title">Habilidades especiales:</h3>
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