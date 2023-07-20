import React from 'react';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <img src={pokemon.img} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <p>ID: {pokemon.num}</p> {/* Adiciona a informação do ID aqui */}
      <p>Type: {pokemon.type.join(', ')}</p>
      <p>Height: {pokemon.size.height}</p>
      <p>Weight: {pokemon.size.weight}</p>
      {/* Adicione outras informações que você queira exibir aqui */}
    </div>
  );
};

export default PokemonCard;
