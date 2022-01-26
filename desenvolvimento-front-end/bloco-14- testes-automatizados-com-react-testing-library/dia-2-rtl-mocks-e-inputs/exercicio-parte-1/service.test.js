const {numeroAleatorio} = require('./service');

describe('Teste referentes a função "numeroAleatorio"', () => {
    it('teste se a função foi chamada', () => {
        const numeroAleatorio = jest.fn();
        numeroAleatorio();
        expect(numeroAleatorio).toHaveBeenCalled();
    });
    it('test se a função retorna 9', () => {
        const numeroAleatorio = jest.fn().mockReturnValue(9);
        expect(numeroAleatorio()).toBe(9);
    });
    it('teste se afunção foi chamada 3 vezes', () => {
        const numeroAleatorio = jest.fn();
        numeroAleatorio();
        numeroAleatorio();
        numeroAleatorio();
        expect(numeroAleatorio).toHaveBeenCalledTimes(3);
    })
})
