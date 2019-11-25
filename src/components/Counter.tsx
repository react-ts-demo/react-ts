import * as React from "react";
import {syncDispatch} from '../redux/syncDispatch'
import {Context} from '../redux/Context'

interface State {
  [name:string]: any
}
interface ReceiveProps {
  children?: any,

}

export interface Action  {
  type: string;
  payload: any;
};
const { Provider } = Context


function reducer(state: State, action: Action): State {

  switch (action.type) {
      //该判断用于对异步进行处理
    case "click_async":
    case "click_sync":
      return { ...state };
    case "loading_start":
      return { ...state, loading: true };
    case "loading_end":
      return { ...state, loading: false };

    // case "increment":
    //   return { count: state.count + 1 };
    // case "decrement":
    //   return { count: state.count + 1 };
    default:
      throw new Error();
  }
}

export const Counter: React.FC<ReceiveProps> = ({
  children
}: ReceiveProps) => {
  const [state, dispatch] = React.useReducer(reducer, { loading: false as boolean });
  //    return (
  //        <>
  //         <div>{state.count}</div>
  //         <div onClick={()=>dispatch({type: 'increment', msg: {id: 2 as number}})}>+</div>
  //        </>
  //    )
  return <Provider value={{ state, dispatch:syncDispatch(dispatch) }}>{children}</Provider>;
};
