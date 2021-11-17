const productDetails = require("../src/productDetails");

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe("6 - Implemente os casos de teste para a função `productDetails`", () => {
  it("Verifica se a função `productDetails` tem o comportamento esperado", () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe("function");
    // Teste se o retorno da função é um array.
    expect(typeof productDetails()).toBe("object");
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails().length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails()[0]).toBe("object");
    expect(typeof productDetails()[1]).toBe("object");
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    const prod = productDetails("Alcool gel", "Máscara");
    expect(prod[0]).not.toEqual(prod[1]);
    // Teste se os dois productIds terminam com 123.
    const produto = productDetails("Alcool gel", "Máscara");
    const p1 = produto[0].details.productId;
    const p2 = produto[1].details.productId;
    let string1 = "";
    let string2 = "";

    for (let i = 1; i <= 3; i++) {
      string1 += p1[p1.length - i];
      string2 += p2[p2.length - i];
    }

    const reverse = (string) => {
      return string.split("").reverse().join("");
    };

    expect(reverse(string1) && reverse(string2)).toEqual("123");
  });
});
