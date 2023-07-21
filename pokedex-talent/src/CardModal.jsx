import React from 'react';
import Modal from 'react-modal';
import './CardModal.css'

function colorByType(type) {
  switch (type) {
    case "normal":
      return "#a6a877";
    case "grass":
      return "#77c850";
    case "fire":
      return "#ee7f30";
    case "water":
      return "#678fee";
    case "eletric":
      return "#f7cf2e";
    case "ice":
      return "#98d5d7";
    case "ground":
      return "#dfbf69";
    case "flying":
      return "#a98ff0";
    case "poison":
      return "#a98ff0";
    case 'fighting':
      return '#bf3029';
    case 'psychic':
      return '#f65687';
    case 'dark':
      return '#725847';
    case 'rock':
      return '#b8a137';
    case 'bug':
      return '#a8b720';
    case 'ghost':
      return '#6e5896';
    case 'steel':
      return '#b9b7cf';
    case 'dragon':
      return '#6f38f6';
    case 'fairy':
      return '#f9aec7';
    default:
      return "#fff";
  }
}

const CardModal = ({ selectedPokemon, closeModal }) => {
  return (
    <>
      <Modal className="modal"
        isOpen={selectedPokemon !== null}
        onRequestClose={closeModal}
        contentLabel="Detalhes do Pokémon"
      >
        {selectedPokemon && (
          <div className='modal-container'>
            <div> <img
              src={selectedPokemon.img}
              alt={selectedPokemon.name}
              className="modal-image"
            />
              <div className="pokemon-modal-name"> {selectedPokemon.name.toUpperCase()}</div>
              <div className="pokemon-attribute pokemon-types">
                {selectedPokemon.type.map(element => {
                  return <button style={{ background: colorByType(element), color: "#fff" }}>{element}</button>
                })}
              </div>

            </div>
            <div>
              <div className='modal-content'>
                <button className="modal-close-button" onClick={closeModal}>X</button>
                <div className="pokemon-attributes">
                  <div className="pokemon-attribute">Weight: {selectedPokemon.size.weight}</div>
                  <div className="pokemon-attribute">Height: {selectedPokemon.size.height}</div>
                  <div className="pokemon-attribute">Base-attack: {selectedPokemon.stats["base-attack"]}</div>
                  <div className="pokemon-attribute">Base-defense: {selectedPokemon.stats["base-defense"]}</div>
                  <div className="pokemon-attribute">Base-stamina: {selectedPokemon.stats["base-stamina"]}</div>
                  <div className="pokemon-attribute">Max-CP: {selectedPokemon.stats["max-cp"]}</div>
                  <div className="pokemon-attribute">Max-HP: {selectedPokemon.stats["max-hp"]}</div>

                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default CardModal;

