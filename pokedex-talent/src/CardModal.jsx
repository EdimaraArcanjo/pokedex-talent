import React from 'react';
import Modal from 'react-modal';

const CardModal = ({ selectedPokemon, closeModal }) => {
  return (
    <>
      <Modal
        isOpen={selectedPokemon !== null}
        onRequestClose={closeModal}
        contentLabel="Detalhes do Pokémon"
      >
        {selectedPokemon && (
          <>
            <h2>Detalhes do Pokémon</h2>
            <img src={selectedPokemon.img} alt={selectedPokemon.name} />
            <div>Nome: {selectedPokemon.name}</div>
            <div>Sobre: {selectedPokemon.about}</div>
            <div>Peso: {selectedPokemon.size.weight}</div>
            <div>Altura: {selectedPokemon.size.height}</div>
            <button onClick={closeModal}>Fechar</button>
          </>
        )}
      </Modal>
    </>
  );
};

export default CardModal;
