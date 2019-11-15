import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
// import {MyComponent} from './PropsComponent'
// import StatePropsComp from './state_propsComp'
// import RfcComp from './rfcComp'
import {Upload} from './components/Upload'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <>
    {/* <MyComponent name='propsComponents'/> */}
    <App/>  
    <Upload/>
    {/* <StatePropsComp />
    <RfcComp name='rfctest'/> */}
  </>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
