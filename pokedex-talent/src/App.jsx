import { useState } from 'react'
import logo from './img/logo.png'
import './App.css'
import pokemonsJson from './pokemon.json'
import Modal from 'react-modal'

function App() {
  const { pokemon: originalPokemonList } = pokemonsJson;
  const [pokemons, setPokemons] = useState(originalPokemonList);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPokemons(
      originalPokemonList.filter((item) =>
        item.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Você pesquisou por: ${searchTerm}`);
    // alert(`Opção selecionada: ${selectedOption}`);
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
        <form onSubmit={handleSubmit}>
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
          <input type="submit" value="Pesquisar" />
        </form>
        <div>
          {pokemons.length !== 0 &&
            pokemons.map((item, index) => (
              <div className="card" key={index} onClick={() => openModal(item)}>
                <img src={item.img} alt={item.name} />
                <span>Nome: {item.name}</span>
              </div>
            ))}
        </div>
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