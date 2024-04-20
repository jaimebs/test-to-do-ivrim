import { list } from "./api";

export async function loadLists() {
  const [toDo, inProgress, done] = await Promise.all([
    list("A Fazer"),
    list("Em Progresso"),
    list("Concluído"),
  ]);

  return [
    {
      title: "A Fazer",
      creatable: true,
      cards: toDo.data,
    },
    {
      title: "Em Progresso",
      creatable: false,
      cards: inProgress.data,
    },
    {
      title: "Concluído",
      creatable: false,
      done: true,
      cards: done.data,
    },
  ];
}
