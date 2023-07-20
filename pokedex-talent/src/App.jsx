import { useState } from 'react'
import logo from './img/logo.png'
import './App.css'
import pokemons from './pokemon.json'
//console.log(pokemons)

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('opcao1'); // Estado para armazenar a opção selecionada no select

  const [pokemon, setPokemon] = useState(pokemons); 

  const [filteredPokemons, setFilteredPokemons] = useState([]);

  console.log(setPokemon)

  const filter = (type) => {
    setFilteredPokemons(pokemon.filter(item => item.type === type));
  };
  

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Você pesquisou por: ${searchTerm}`);
    alert(`Opção selecionada: ${selectedOption}`);
    // Aqui você pode enviar o valor de searchTerm e selectedOption para o backend para realizar a pesquisa e utilizar a opção selecionada.
    // Por exemplo, usando uma biblioteca de requisições HTTP, como Axios.
  };

  return (
    <>
    
    <ul>
        {setFilteredPokemons.length !== 0 ?
            (filteredPokemons.map((item) => (
                  <li
                    className="menu-item"
                    onClick={() => filter(item)}
                    key={item.id}
                  >
                    <span>{item.name}</span>
                    <img src={item.image} />
                  </li>
                )))
                : (pokemon.map((item) => (
                  <li
                    className="menu-item"
                    onClick={() => filter(item)}
                    key={item.id}
                  >

                    <span >{item.name}</span>
                    <img src={item.image} />

                  </li>
                )))
              }
            </ul>



  
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
          <label>
            Selecione uma opção:
            <select value={selectedOption} onChange={handleSelectChange}>
              <option value="opcao1">Opção 1</option>
              <option value="opcao2">Opção 2</option>
              <option value="opcao3">Opção 3</option>
              <option value="opcao4">Opção 4</option>
            </select>
          </label>
          <input type="submit" value="Pesquisar" />
        </form>
      </div>
    </>
  );
}





export default App;
