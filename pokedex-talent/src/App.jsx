
import React, { useState, useEffect } from 'react';
import logo from './img/logo.png';
import './App.css';
import pokemons from './pokemon.json';
import PokemonCard from './PokemonCard';
import Modal from 'react-modal'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('opcao1');
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    setFilteredPokemons(pokemons.pokemon); // Mostra todos os Pokémon ao carregar a página
  }, []);

  const filter = (value) => {
    if (selectedOption === 'opcao1') {
      setFilteredPokemons(pokemons.pokemon.filter(item => item.type.includes(value)));
    } else if (selectedOption === 'opcao2') {
      setFilteredPokemons(pokemons.pokemon.filter(item => item.name.toLowerCase().includes(value.toLowerCase())));
    } else if (selectedOption === 'opcao3') {
      const id = parseInt(value, 10);
      if (!isNaN(id)) {
        setFilteredPokemons(pokemons.pokemon.filter(item => parseInt(item.num, 10) === id));
      } else {
        setFilteredPokemons(pokemons.pokemon);
      }
    }
  };

  const handleSearchChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    filter(event.target.value.trim()); // Chama a função de filtro ao alterar o campo de pesquisa
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    filter(searchTerm.trim());
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setSearchTerm(''); // Limpar o campo de pesquisa ao selecionar a opção de pesquisa por ID
    filter('');
  };

  const openModal = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
  };

  return (
    <>
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

      <div className="container">
        <ul className="pokemon-list">
          {filteredPokemons.map((item) => (
            <li key={item.num} onClick={() => openModal(item)}>
              <PokemonCard pokemon={item} />
            </li>
          ))}
        </ul>
      </div>

      <Modal
        isOpen={selectedPokemon !== null}
        onRequestClose={closeModal}
        contentLabel="Detalhes do Pokémon"
      >
        {selectedPokemon && (
          <>
            <h2>Detalhes do Pokémon</h2>
            <img src={selectedPokemon.img} alt={selectedPokemon.name} />
            <span>Nome: {selectedPokemon.name}</span>
            {/* Adicione outras informações do Pokémon aqui */}
            <button onClick={closeModal}>Fechar</button>
          </>
        )}
      </Modal>
    </>
  );
}

export default App;

