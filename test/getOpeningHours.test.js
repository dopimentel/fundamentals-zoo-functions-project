const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se a função retorna todos os horários quando não recebe nenhum parâmetro', () => {
    const actual = getOpeningHours();

    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });

  it('Testa se o zoo estará fechado na segunda', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');

    const expected = 'The zoo is closed';
    expect(actual).toMatch(expected);
  });

  it('Testa se o zoo estará aberto on Tuesday at 09:00-AM', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');

    const expected = 'The zoo is open';
    expect(actual).toMatch(expected);
  });

  it('Testa se o zoo estará fechado on Wednesday at 09:00-PM', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');

    const expected = 'The zoo is closed';
    expect(actual).toMatch(expected);
  });
});
