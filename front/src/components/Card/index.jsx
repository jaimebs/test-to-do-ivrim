/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useRef, useContext } from "react";
import { useDrag, useDrop } from "react-dnd";

import BoardContext from "../Board/context";
import { IoTrashBinSharp } from "react-icons/io5";

import { Container, Label } from "./styles";

import { deleteTask } from "../../services/api";

export default function Card({ data, index, listIndex }) {
  const ref = useRef();
  const { move } = useContext(BoardContext);

  const handleRemoveCard = async (id) => {
    await deleteTask(id);
    window.location.reload();
  };

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: "CARD", index, listIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (
        draggedIndex === targetIndex &&
        draggedListIndex === targetListIndex
      ) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        <h4>{data.title}</h4>
        <IoTrashBinSharp onClick={() => handleRemoveCard(data._id)} />
        {<Label key={data._id} />}
      </header>
      <p>{data.description}</p>
    </Container>
  );
}
