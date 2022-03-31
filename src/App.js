import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';
import MainComponent from './components/MainComponent';

function App() {
  const [errorMessage, setErrorMessage] = useState(false);
  const [somePokemons, setSomePokemons] = useState([]);
  useEffect(() => {
    const getPokemons = () => {
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=150`)
        .then(response => setSomePokemons(response.data.results))
        .catch(err => console.log(err));
    };

    getPokemons();
  }, []);

  const [pokemonToShow, setPokemonToShow] = useState({});
  
  const getPokemon = name => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => {
        setErrorMessage(false);
        setPokemonToShow(response.data);
      })
      .catch(err => {
        setErrorMessage(true);
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row  align-items-center justify-content-center g-5 py-5">
          <div class="col-lg-6">
            <MainComponent pokemons={somePokemons} obtainPokemon={getPokemon} errorMess={errorMessage} />
          </div>
          <div class="col-lg-6">
            {
              pokemonToShow.abilities
                ?
                <PokemonCard name={pokemonToShow.name.toUpperCase()} imageUrl={pokemonToShow.sprites.other.home.front_default} weight={pokemonToShow.weight} type={pokemonToShow.types[0].type.name} abilities={pokemonToShow.abilities}/>
                :
                <div class="text-center">
                  <img src={'http://assets.stickpng.com/images/5a0596df9cf05203c4b60445.png'} className="rounded d-block mx-auto img-fluid" alt='Pokeball' width="300" loading="lazy" />
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
