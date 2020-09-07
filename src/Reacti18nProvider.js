import { createElement } from 'react';
import Reacti18nContext from './Reacti18nContext';
import { formatMessage } from './Translate';

export default function Reacti18nProvider({ locale, messages, children }) {
  const value = { locale, messages, t: formatMessage(messages) }
  return createElement(Reacti18nContext.Provider, { value }, children);
};
