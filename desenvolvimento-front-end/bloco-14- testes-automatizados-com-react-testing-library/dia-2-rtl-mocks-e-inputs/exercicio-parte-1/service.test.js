const service = require('./service');

describe('Teste referentes a função "numeroAleatorio"', () => {
    it.skip('testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
        service.numeroAleatorio = jest.fn().mockReturnValue(8)
        
        expect(service.numeroAleatorio()).toBe(8);
        expect(service.numeroAleatorio).toHaveBeenCalled();
        expect(service.numeroAleatorio).toHaveBeenCalledTimes(1);
    });
    
    it.skip('teste se afunção foi chamada e se a nova implementação foi aplicada', () => {
        service.numeroAleatorio = jest.fn().mockImplementationOnce((a, b) => a / b);
        expect(service.numeroAleatorio(4, 2)).toBe(2);
        expect(service.numeroAleatorio).toHaveBeenCalled();
        expect(service.numeroAleatorio).toHaveBeenCalledTimes(1);
        expect(service.numeroAleatorio).toHaveBeenCalledWith(4, 2);
    })
    it.skip('teste se a funação foi chamada com a nova implementação com três parâmetros', () => {
        service.numeroAleatorio = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
        expect(service.numeroAleatorio(2, 2, 2)).toBe(8);
        expect(service.numeroAleatorio).toHaveBeenCalled();
        expect(service.numeroAleatorio).toHaveBeenCalledTimes(1);
        expect(service.numeroAleatorio).toHaveBeenCalledWith(2, 2, 2);
    })
    it('teste se afunção mockada recebe um parâmetro e retorna o dobro', () => {
        service.numeroAleatorio.mockReset();
        expect(service.numeroAleatorio).toHaveBeenCalledTimes(0);
    })
})
