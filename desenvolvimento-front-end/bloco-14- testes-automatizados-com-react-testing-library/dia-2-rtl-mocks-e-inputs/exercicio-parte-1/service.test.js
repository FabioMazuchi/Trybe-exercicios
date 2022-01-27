const service = require("./service");
jest.mock("./service");

it.skip("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
  service.numeroAleatorio = jest.fn().mockReturnValue(8);

  expect(service.numeroAleatorio()).toBe(8);
  expect(service.numeroAleatorio).toHaveBeenCalled();
  expect(service.numeroAleatorio).toHaveBeenCalledTimes(1);
});

it.skip("teste se afunção foi chamada e se a nova implementação foi aplicada", () => {
  service.numeroAleatorio = jest.fn().mockImplementationOnce((a, b) => a / b);
  expect(service.numeroAleatorio(4, 2)).toBe(2);
  expect(service.numeroAleatorio).toHaveBeenCalled();
  expect(service.numeroAleatorio).toHaveBeenCalledTimes(1);
  expect(service.numeroAleatorio).toHaveBeenCalledWith(4, 2);
});

it.skip("teste se a funação foi chamada com a nova implementação com três parâmetros", () => {
  service.numeroAleatorio = jest
    .fn()
    .mockImplementationOnce((a, b, c) => a * b * c);
  expect(service.numeroAleatorio(2, 2, 2)).toBe(8);
  expect(service.numeroAleatorio).toHaveBeenCalled();
  expect(service.numeroAleatorio).toHaveBeenCalledTimes(1);
  expect(service.numeroAleatorio).toHaveBeenCalledWith(2, 2, 2);
});

it.skip("teste se afunção mockada recebe um parâmetro e retorna o dobro", () => {
  service.numeroAleatorio = jest.fn().mockImplementationOnce((a) => a * 2);
  expect(service.numeroAleatorio(2)).toBe(4);
});

it("teste se a função toMaiusculas retorna a palavra em caixa baixa", () => {
  service.toMaiusculas = jest
    .fn()
    .mockImplementationOnce((string) => string.toLowerCase());

  expect(service.toMaiusculas("XABLAU")).toBe("xablau");
  expect(service.toMaiusculas).toHaveBeenCalled();
  expect(service.toMaiusculas).toHaveBeenCalledTimes(1);
  expect(service.toMaiusculas).toHaveBeenCalledWith("XABLAU");

  service.toMaiusculas.mockRestore();

  expect(service.toMaiusculas("xablau")).toBe(undefined);
});

it.skip("teste se a função primeiraletra retorna a a última letra", () => {
  service.primeiraLetra = jest
    .fn()
    .mockImplementationOnce((string) => string[string.length - 1]);
  expect(service.primeiraLetra("xablau")).toBe("u");
});

it.skip("teste se a função concatString concatena três strings", () => {
  service.concatStrings = jest
    .fn()
    .mockImplementationOnce((strA, strB, strC) => `${strA}${strB}${strC}`);
  expect(service.concatStrings("xablau", "estuda", "programação")).toBe(
    "xablauestudaprogramação"
  );
});

it.skip("teste se a função concatString concatena três strings", () => {
  service.concatStrings = jest
    .fn()
    .mockImplementationOnce((strA, strB, strC) => `${strA}${strB}${strC}`);
  expect(service.concatStrings("xablau", "estuda", "programação")).toBe(
    "xablauestudaprogramação"
  );
});

describe("teste da chamada da api", () => {
  service.callApi = jest.fn();
  afterEach(service.callApi.mockReset());

  it("teste se a promisse resolver", async () => {
		service.callApi.mockResolvedValue('sucesso');

		service.callApi();
		expect(service.callApi).toHaveBeenCalled();
	});
});
