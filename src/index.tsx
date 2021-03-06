import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import {Upload} from './components/Upload'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <>
    <App/>  
    <Upload/>
  </>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
