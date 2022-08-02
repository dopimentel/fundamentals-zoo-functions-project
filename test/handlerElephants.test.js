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
});