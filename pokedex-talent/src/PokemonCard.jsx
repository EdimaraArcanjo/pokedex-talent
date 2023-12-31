import { colorByType } from './utils';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card" style={{ background: colorByType(pokemon.type[0]) }}>
      <img src={pokemon.img} alt={pokemon.name} />
      <h2>{pokemon.name.toUpperCase()}</h2>
      <p>ID: {pokemon.num}</p> {/* Adiciona a informação do ID aqui */}
      <p>Type: {pokemon.type.join(', ')}</p>
    </div>
  );
};

export default PokemonCard;
