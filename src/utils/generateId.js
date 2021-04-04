export default () => {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const randomNumberBetween0and25 = () => Math.floor(Math.random() * 26);
  const randomNumberBetween0and9 = () => Math.floor(Math.random() * 10);

  return `${letters[randomNumberBetween0and25()]}${
    letters[randomNumberBetween0and25()]
  }${randomNumberBetween0and9()}${randomNumberBetween0and9()}${randomNumberBetween0and9()}${randomNumberBetween0and9()}`;
};
