/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { MdAdd } from "react-icons/md";

import Card from "../Card";
import Fake from "../Card/fake";

import { Container } from "./styles";
import ModalTask from "../Modal";

export default function List({ data, index: listIndex }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <>
            <button type="button" onClick={handleOpenModal}>
              <MdAdd size={24} color="#FFF" />
            </button>
            <ModalTask
              openModal={modalIsOpen}
              closeModal={handleCloseModal}
            ></ModalTask>
          </>
        )}
      </header>

      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {data.cards.map((card, index) => (
          <Card
            key={card._id}
            listIndex={listIndex}
            index={index}
            data={card}
          />
        ))}
        <Fake index={data.cards.length} listIndex={listIndex} />
      </ul>
    </Container>
  );
}
