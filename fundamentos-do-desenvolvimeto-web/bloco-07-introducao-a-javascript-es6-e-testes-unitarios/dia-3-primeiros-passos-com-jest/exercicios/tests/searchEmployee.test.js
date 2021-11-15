const searchEmployee = require('../js/searchEmployee');

describe('Testes referentes a função searchEmployee', () => {
    it('Verifica se a função existe', () => {
        expect(typeof searchEmployee).toEqual('function');
    });
    it('Verifica se ao passar os parâmetros (id, firstName) retorna o valor de firstName', () => {
       expect(searchEmployee('8579-6', 'firstName')).toEqual('Ana'); 
       expect(searchEmployee('5569-4', 'firstName')).toEqual('George'); 
       expect(searchEmployee('4456-4', 'firstName')).toEqual('Leila'); 
       expect(searchEmployee('1256-4', 'firstName')).toEqual('Linda'); 
    });
    it('Verifica se ao passar os parâmetros ("id", "lastName") retorna o valor de lastName', () => {
        expect(searchEmployee('8579-6', 'lastName')).toEqual('Gates'); 
        expect(searchEmployee('5569-4', 'lastName')).toEqual('Jobs'); 
        expect(searchEmployee('4456-4', 'lastName')).toEqual('Zuckerberg'); 
        expect(searchEmployee('1256-4', 'lastName')).toEqual('Bezos'); 
    });
    it('Verifica se ao passar como parâmetro valores que não sejam strings retorne "Valores que não sejam strings não são permitidos"', () => {
        expect(() => {
            searchEmployee('');
        }).toThrow('Valores que não sejam strings não são permitidos');
    });
})