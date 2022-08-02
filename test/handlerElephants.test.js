const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se a função retorna "null" para parametro não especificado.', () => {
    expect(handlerElephants('sdsdsc')).toBeNull();
  });
  it('Testa se "count" retorna 4.', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Testa se "name" retorna um array que contém um elemento "Jeferson".', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Testa se "averageAge" retorna a média.', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Testa se a função retorna "undefined" caso não receba parâmetro.', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Testa se a função retorna "Parâmetro inválido, é necessário uma string" caso não receba uma string como parâmetro.', () => {
    expect(handlerElephants(5)).toMatch('Parâmetro inválido, é necessário uma string');
  });
  it('Testa se a função retorna um array com os dias em que os elefantes estão disponíveis quando recebe "availability".', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
