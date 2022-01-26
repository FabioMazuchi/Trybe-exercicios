const service = require('./service');

describe('Teste referentes a função "numeroAleatorio"', () => {
    it('testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
        service.numeroAleatorio = jest.fn().mockReturnValue(8)
        
        expect(service.numeroAleatorio()).toBe(8);
        expect(service.numeroAleatorio).toHaveBeenCalled();
        expect(service.numeroAleatorio).toHaveBeenCalledTimes(1);
    });
    
    it('teste se afunção foi chamada e se a nova implementação foi aplicada', () => {
        service.numeroAleatorio = jest.fn().mockImplementationOnce((a, b) => a / b);
        expect(service.numeroAleatorio(4, 2)).toBe(2);
        expect(service.numeroAleatorio).toHaveBeenCalled();
        expect(service.numeroAleatorio).toHaveBeenCalledTimes(1);
    })
})
