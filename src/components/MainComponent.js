import React, { useEffect, useState } from 'react';
import ErrorMessage from './ErrorMessage';

const MainComponent = props => {
    const [inputSearchPokemon, setInputSearchPokemon] = useState('');
    
    const handleInputChange = e => setInputSearchPokemon(e.target.value);

    const [randomSuggestions, setRandomSuggestions] = useState([]);
    useEffect(() => {
        if (props.pokemons.length > 1) {
            randomPokemons();
        }
    }, [props.pokemons.length]);

    const randomPokemons = () => {
        const randomIndex = Math.floor(Math.random() * (props.pokemons.length - 5));
        const suggestion = props.pokemons.slice(randomIndex, randomIndex + 5);
        setRandomSuggestions(suggestion);
    };

    return (
        <>
            <h1 className="display-4 fw-bold lh-1 mb-3 main-title">¡Bienvenido, maestro pokemón!</h1>
            <p className="lead">¿Sobre qué pokemón quieres obtener información el día de hoy?</p>
            <div className="input-group mb-3">
                <input onChange={handleInputChange} value={inputSearchPokemon} type="text" className="form-control" placeholder="Pokemon name" aria-label="Pokemon name" aria-describedby="button-addon2" />
                <button onClick={() => props.obtainPokemon(inputSearchPokemon)} className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
            </div>
            <div className="d-grid gap-1 d-flex flex-wrap justify-content-center" >
                {props.errorMessage && <ErrorMessage />}
                <p className="lead">¿No sabes qué buscar? Aquí de te dejamos unas recomendaciones:</p>
                {
                    randomSuggestions.map(pokemon => <button className="btn btn-primary btn-lg px-4 me-md-2" onClick={() => props.obtainPokemon(pokemon.name)} key={pokemon.name}>{pokemon.name}</button>)
                }
                <button className="btn btn-outline-success btn-lg px-4 me-md-2" onClick={() => randomPokemons()}>Click para más recomendaciones</button>
            </div>
        </>
    )
};

export default MainComponent;