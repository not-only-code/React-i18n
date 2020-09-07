import { formatMessage } from './Translate';

describe('Translate', () => {

  const messages = {
    'term': 'Testing translation',
    'test.withParams': 'Test {param}'
  };

  const t = formatMessage(messages);

  describe('formatMessage', () => {
    it('It should return the key if don\'t find any term', () => {
      expect(t('bla.bla.bla')).toBe('bla.bla.bla');
    });

    it('Should translate a simple term correctly', () => {
      expect(t('term')).toBe('Testing translation');
    });

    it('Should translate a term with params correcly', () => {
      expect(t('test.withParams', { param: 'Boooo' })).toBe('Test Boooo');
      expect(t('test.withParams', { param: 666 })).toBe('Test 666');
      expect(t('test.withParams', { param: undefined })).toBe('Test {param}');
    });
  });
});
