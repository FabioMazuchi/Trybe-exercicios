function encode(string) {
    let novaString = '';
  
    for (let i = 0; i < string.length; i++) {
      if (string[i] == 'a') {
        novaString += '1';
      } else if (string[i] == 'e') {
        novaString += '2';
      } else if (string[i] == 'i') {
        novaString += '3';
      } else if (string[i] == 'o') {
        novaString += '4';
      } else if (string[i] == 'u') {
        novaString += '5';
      } else {
        novaString += string[i];
      }
    }
    return novaString;
  }

  module.exports = encode;