import React from 'react';
import Modal from 'react-modal';
import './CardModal.css'

function colorByType(type) {
  switch (type) {
    case "grass":
      return "green";
    case "poison":
      return "purple";
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

