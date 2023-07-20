import React, { useState, useEffect } from 'react';
import logo from './img/logo.png';
import './App.css';
import pokemons from './pokemon.json';
import PokemonCard from './PokemonCard';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('opcao1');
  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    setPokemon(pokemons.pokemon);
  }, []);

  const filter = (value) => {
    if (selectedOption === 'opcao1') {
      setFilteredPokemons(pokemon.filter(item => item.type.includes(value)));
    } else if (selectedOption === 'opcao2') {
      setFilteredPokemons(pokemon.filter(item => item.name.toLowerCase().includes(value.toLowerCase())));
    } else if (selectedOption === 'opcao3') {
      const id = parseInt(value, 10);
      if (!isNaN(id)) {
        setFilteredPokemons(pokemon.filter(item => item.num === id));
      } else {
        setFilteredPokemons([]);
      }
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    if (selectedOption === 'opcao3') {
      filter(searchTerm.trim());
    } else {
      setFilteredPokemons([]);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    filter(searchTerm.trim());
  };

  return (
    <>
      <div className="container">
        <ul className="pokemon-list">
          {filteredPokemons.length !== 0
            ? filteredPokemons.map((item) => (
                <li key={item.num}>
                  <PokemonCard pokemon={item} />
                </li>
              ))
            : pokemon.map((item) => (
                <li key={item.num}>
                  <PokemonCard pokemon={item} />
                </li>
              ))}
        </ul>
      </div>

      <div>
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="App">
        <h1>Pesquisar</h1>
        <form onSubmit={handleSearchSubmit}>
          <label>
            Digite sua pesquisa:
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Digite aqui..."
              required
            />
          </label>
          <label>
            Selecione uma opção:
            <select value={selectedOption} onChange={handleSelectChange}>
              <option value="opcao1">Filtrar por Tipo</option>
              <option value="opcao2">Filtrar por Nome</option>
              <option value="opcao3">Filtrar por ID</option>
            </select>
          </label>
          <input type="submit" value="Pesquisar" />
        </form>
      </div>
    </>
  );
}

export default App;