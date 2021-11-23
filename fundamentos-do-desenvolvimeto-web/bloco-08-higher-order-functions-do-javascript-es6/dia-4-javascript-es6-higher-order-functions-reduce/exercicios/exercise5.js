const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA() {
  return names.reduce(
    (acc, curr) =>
      acc +
      curr.split("").reduce((accumulator, current) => {
        if (current === "a" || current === "A") return accumulator + 1;
        return accumulator;
      }, 0),
    0
  );
}
