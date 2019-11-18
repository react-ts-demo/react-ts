import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import {Upload} from './components/Upload'
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
  <>
    <App/>  
    <Upload url='http://www.baidu.com' callBack={(res)=>{console.log(res)}}/>
  </>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
