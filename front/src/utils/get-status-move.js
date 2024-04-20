export function getStatusMove(index) {
  const status = {
    0: "A Fazer",
    1: "Em Progresso",
    2: "Concluído",
  };
  return status[index];
}
