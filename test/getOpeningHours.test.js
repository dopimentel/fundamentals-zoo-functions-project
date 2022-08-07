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

  it('Testa se a função lança o erro "The hour should represent a number" quando a hora não for número', () => {
    const actual = () => getOpeningHours('Wednesday', 'xx:00-PM');

    const expected = Error('The hour should represent a number');
    expect(actual).toThrow(expected);
  });

  it('Testa se a função lança o erro "The minutes should represent a number" quando os minutos não forem números', () => {
    const actual = () => getOpeningHours('Wednesday', '09:xx-PM');

    const expected = Error('The minutes should represent a number');
    expect(actual).toThrow(expected);
  });

  it('Testa se a função lança o erro "The abbreviation must be \'AM\' or \'PM\'" se a abreviação não ser am/pm', () => {
    const actual = () => getOpeningHours('Wednesday', '09:00-KM');

    const expected = Error('The abbreviation must be \'AM\' or \'PM\'');
    expect(actual).toThrow(expected);
  });

  it('Testa se a função lança o erro "The hour must be between 0 and 12" se a hora estiver no formato militar', () => {
    const actual = () => getOpeningHours('Wednesday', '23:00-PM');

    const expected = Error('The hour must be between 0 and 12');
    expect(actual).toThrow(expected);
  });

  it('Testa se a função lança o erro "The minutes must be between 0 and 59" se os minutos não estiverem no intervalo 0 - 59', () => {
    const actual = () => getOpeningHours('Wednesday', '11:70-PM');

    const expected = Error('The minutes must be between 0 and 59');
    expect(actual).toThrow(expected);
  });

  it('Testa se a função lança o erro "The day must be valid. Example: Monday" se não receber um weekday válido em inglês', () => {
    const actual = () => getOpeningHours('segunda', '11:00-PM');

    const expected = Error('The day must be valid. Example: Monday');
    expect(actual).toThrow(expected);
  });
});
