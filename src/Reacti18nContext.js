import { createContext } from 'react';

const Reacti18nContext = createContext({
  locale: '',
  messages: {},
  t: (k, v) => k
})

export default Reacti18nContext;
