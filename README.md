# React i18n

The simplest tool to translate texts in React

## installation

(namespace to be defined)

```bash
npm i @not-only-code/react-i18n
```

## Usage

Create a definitions JSON file per translation.

```JSON
// translations/en-GB.json
{
  "appHeading": "My App Heading"
}
```

Add `Reacti18nProvider` at start up your app. Inject there the `locale` and `messages` (a key, value JSON with a locale translations).

```jsx
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import messages from './translations/en-GB.json';
import { Reacti18nProvider } from 'react-i18n';

ReactDOM.render(
  <Reacti18nProvider locale='en-GB' messages={messages}>
    <App />
  </Reacti18nProvider>,
  document.getElementById('root')
);
```

Use `Reacti18nContext` to get `t` method and translate your definitions.

```jsx
// App.js
import React, { useContext } from 'react';
import { Reacti18nContext } from 'react-i18n';

function App() {
  const { t } = useContext(Reacti18nContext);
  return (
    <div>
      <h1>{ t('appHeading') }</h1>
    </div>
  );
}

export default App;
```
