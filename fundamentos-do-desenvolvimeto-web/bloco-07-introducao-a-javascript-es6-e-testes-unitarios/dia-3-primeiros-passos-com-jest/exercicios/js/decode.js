function decode(string) {
  let novaString = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] == "1") {
      novaString += "a";
    } else if (string[i] == "2") {
      novaString += "e";
    } else if (string[i] == "3") {
      novaString += "i";
    } else if (string[i] == "4") {
      novaString += "o";
    } else if (string[i] == "5") {
      novaString += "u";
    } else {
      novaString += string[i];
    }
  }
  return novaString;
}

module.exports = decode;
