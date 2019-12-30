import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SampleComponent from './Sample';

ReactDOM.hydrate(
  <SampleComponent compiler="TypeScript" framework="Express" library="React" />,
  document.getElementById('sample')
);
