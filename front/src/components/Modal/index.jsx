/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "react-modal";
import { ModalContainer, CustomStyle, CustomCloseButton } from "./styles";
import { create } from "../../services/task";

export default function ModalTask({ openModal, closeModal }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("A Fazer");

  function onRequestClose() {
    closeModal();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const task = {
      title,
      description,
      status,
    };
    await create(task);
    window.location.reload();
  }

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={onRequestClose}
      style={CustomStyle}
      contentLabel="Adicionar uma tarefa"
    >
      <ModalContainer>
        <button onClick={onRequestClose} style={CustomCloseButton}>
          X
        </button>
        <h2>Adicionar uma Tarefa</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Título:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Descrição:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="status">Status:</label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="A Fazer">A Fazer</option>
              <option value="Em Progresso">Em Progresso</option>
              <option value="Concluído">Concluído</option>
            </select>
          </div>
          <button type="submit">Adicionar</button>
        </form>
      </ModalContainer>
    </Modal>
  );
}
