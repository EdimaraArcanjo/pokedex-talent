import { useState, useEffect } from 'react';
import logo from './img/logo.png';
import pokemons from './pokemon.json';
import PokemonCard from './PokemonCard';
import CardModal from './CardModal';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('opcao');
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [allPokemons, setAllPokemons] = useState([]);


  // Passo 1: Adicione variáveis de estado para a paginação
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Ajuste o número de itens por página conforme necessário

  useEffect(() => {
    setAllPokemons(pokemons.pokemon);
  }, []);


  useEffect(() => {
    if (selectedOption === 'opcao1') {
      setFilteredPokemons(allPokemons.filter(item => item.type.includes(searchTerm)));
    } else if (selectedOption === 'opcao2') {
      setFilteredPokemons(allPokemons.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())));
    } else if (selectedOption === 'opcao3') {
      const id = parseInt(searchTerm, 10);
      if (!isNaN(id)) {
        setFilteredPokemons(allPokemons.filter(item => parseInt(item.num, 10) === id));
      } else {
        setFilteredPokemons(allPokemons);
      }
    } else {
      setFilteredPokemons(allPokemons);
    }
  }, [searchTerm, selectedOption, allPokemons]);


  // Passo 3: Crie uma função para lidar com a lógica da paginação
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Passo 4: Calcule o número total de páginas
  // Passo 5: Defina a lógica para renderizar apenas os Pokémon da página atual
  const indexOfLastPokemon = currentPage * itemsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - itemsPerPage;
  const currentPokemons = filteredPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
  const listPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const totalPages = Math.ceil(filteredPokemons.length / itemsPerPage)

  // Passo 6: Crie as funções para lidar com a pesquisa e seleção de opções
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    filter(searchTerm.trim());
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setSearchTerm('');
  };

  // Função para abrir o modal e definir o Pokémon selecionado
  const openModal = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  // Função para fechar o modal e limpar o Pokémon selecionado
  const closeModal = () => {
    setSelectedPokemon(null);
  };

  const handleSortChange = (event) => {
    const sortOption = event.target.value;
    let listToSort = filteredPokemons.length !== 0 ? [...filteredPokemons] : [...pokemons.pokemon];

    if (sortOption === 'opcao1') {
      // Ordena de A a Z pelo nome
      setFilteredPokemons([...listToSort].sort((a, b) => a.name.localeCompare(b.name)));
      setFilteredPokemons([...listToSort].sort((a, b) => a.num.localeCompare(b.num)));
    } else if (sortOption === 'opcao2') {
      // Ordena de Z a A pelo nome
      setFilteredPokemons([...listToSort].sort((a, b) => b.name.localeCompare(a.name)));
      setFilteredPokemons([...listToSort].sort((a, b) => b.num.localeCompare(a.num)));


    }
  };


  return (
    <>
      <div className='divGeral'>
        <div>
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="App">
          <form className='form' onSubmit={handleSearchSubmit}>
            <select className="inputSelect" value={selectedOption} onChange={handleSelectChange} required>
              <option selected value="opcao">Pesquisar por:</option>
              <option value="opcao1">Tipo</option>
              <option value="opcao2">Nome</option>
              <option value="opcao3">ID</option>
            </select>
            <input className="inputSearch"
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Digite nome, ID ou tipo"
              required
            />
            <select className="inputSelect" onChange={handleSortChange}>
              <option selected value="opcao">Ordenar por nome:</option>
              <option value="opcao1">A - Z</option>
              <option value="opcao2">Z - A</option>
            </select>
            <select className="inputSelect" onChange={handleSortChange}>
              <option selected value="opcao">Ordenar por ID:</option>
              <option value="opcao1">1 - 251</option>
              <option value="opcao2">251- 1</option>
            </select>
          </form>
        </div>
        <div className="container">
          <ul className="pokemon-list">
            {filteredPokemons.length !== 0
              ? currentPokemons.map((item) => (
                <li key={item.num} onClick={() => openModal(item)}>
                  <PokemonCard pokemon={item} />
                </li>
              ))
              : listPokemons.map((item) => ( // Renderiza todos os Pokémon quando a lista filtrada estiver vazia
                <li key={item.num} onClick={() => openModal(item)}>
                  <PokemonCard pokemon={item} />
                </li>
              ))}
          </ul >
        </div >
      </div >

      <div className="campoCard">
        <CardModal selectedPokemon={selectedPokemon} closeModal={closeModal} />
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button className="buttonPagination" key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
      <footer>
        <p className="textoFooter"> Desenvolvido por Bárbara Souza, Edimara Arcanjo, Monique Lupe, Tamires Nascimento, Thalita Nascimento, Tharla Jaroxeski</p>
        <p className="textoFooter">
          Desafio da HCL TECH para o Talent Fest - Hackthoon
        </p>
      </footer>
    </>
  );
}

export default App;

/*
import React, { useState, useEffect } from 'react';
import logo from './img/logo.png';
import './App.css';
import pokemons from './pokemon.json';
import PokemonCard from './PokemonCard';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('opcao1');
  const [filteredPokemons, setFilteredPokemons] = useState([]);

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

  return (
    <>
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
            <li key={item.num}>
              <PokemonCard pokemon={item} />
            </li>
          ))}
        </ul>
      </div>

      <div>
        <img src={logo} className="logo" alt="logo" />
      </div>
    </>
  );
}

export default App;
*/
