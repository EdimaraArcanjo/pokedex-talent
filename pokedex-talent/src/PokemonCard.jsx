import React from 'react';

//teste

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <img src={pokemon.img} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <p>ID: {pokemon.num}</p> {/* Adiciona a informação do ID aqui */}
      <p>Type: {pokemon.type.join(', ')}</p>
    </div>
  );
};

export default PokemonCard;
