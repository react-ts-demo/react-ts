import * as React from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect
// } from "react-router-dom"
import {Upload} from './components/Upload'
import {Counter} from './components/Counter'
// import {Context} from './redux/Context'


const App:React.SFC = () => {
  // const {dispatch} = React.useContext(Context)
  return(
    <Counter>
      {/* <Router>
      <Link to='/home'>home</Link>
      <Link to='/shop'>shop</Link>
      <Link to='/cart'>cart</Link>
      <Link to='/my'>my</Link>
        <Switch>
          <Route path='/home'></Route>
          <Route path='/shop'></Route>
          <Route path='/my'></Route>
          <Route path='/cart' component={Upload}></Route>
          <Redirect to='/cart' from='/'></Redirect>
          <Redirect to='/404'></Redirect>
        </Switch>
      </Router> */}
    <Upload url='http://www.baidu.com' img={true} callBack={(res)=>{console.log(res)}}/>

    </Counter>
  )
}
export default App;
