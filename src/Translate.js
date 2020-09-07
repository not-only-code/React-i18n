/**
 * @type {Array<String>}
 */
const ALLOWED_TYPES = ['string', 'number', 'boolean'];

/**
 * @param {*} value
 * @returns Boolean
 */
const isAllowed = (value) => ALLOWED_TYPES.includes(typeof value);

/**
 * @param {String} term
 * @param {Object} values
 * @returns {String}
 */
const replaceTerm = (term, values = {}) => {
  for (const [ key, value ] of Object.entries(values)) {
    if (isAllowed(value)) {
      term = term.replace(new RegExp(`{${key}}`, 'g'), '' + value);
    }
  }
  return term;
};

/**
 * @param {Object} messages
 * @returns {(String, Object) => String}
 */
export const formatMessage = (messages) => (key, values) => {
  const term = messages[ key ];
  if (!term) { return key; }
  return replaceTerm(term, values);
}
