/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { ModalContainer, CustomStyle, CustomCloseButton } from "./styles";
import { create, update } from "../../services/task";

export default function ModalTask({ openModal, closeModal, task }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("A Fazer");

  function onRequestClose() {
    closeModal();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      title,
      description,
      status,
    };

    task?._id ? await update(task?._id, newTask) : await create(newTask);
    window.location.reload();
  }

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setStatus(task.status);
    }
  }, [task]);

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
        <h2>{task?._id ? "Editar" : "Adicionar"} uma tarefa</h2>
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
          <button type="submit">{task?._id ? "Editar" : "Adicionar"}</button>
        </form>
      </ModalContainer>
    </Modal>
  );
}
