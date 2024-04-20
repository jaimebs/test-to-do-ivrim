/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import produce from "immer";

import BoardContext from "./context";

import List from "../List";

import { Container } from "./styles";
import { loadLists } from "../../services/list-tasks";
import { update } from "../../services/task";
import { getStatusMove } from "../../utils/get-status-move";

export default function Board() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await loadLists();
        setLists(data);
      } catch (error) {
        console.error("Error loading lists:", error);
      }
    }

    fetchData();
  }, []);

  function move(fromList, toList, from, to) {
    setLists(
      produce(lists, (draft) => {
        const dragged = draft[fromList].cards[from];
        if (dragged._id) {
          draft[fromList].cards.splice(from, 1);
          draft[toList].cards.splice(to, 0, dragged);
          const statusMove = getStatusMove(toList);
          const task = { ...dragged, status: statusMove };
          update(task._id, task).then();
        }
      })
    );
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists?.map((list, index) => (
          <List key={list.title} index={index} data={list} />
        ))}
      </Container>
    </BoardContext.Provider>
  );
}
