import * as React from 'react'
import {Component} from 'react'

interface propsComp {
    name?: string,
}
interface clickState {
    num: number
}

class StatePropsComp extends Component<propsComp, clickState> {
    constructor(props: propsComp) {
        super(props)
        this.state = {
            num:3
        }
    }
    public render(){
        return (
          <div>
             <div onClick={()=>{this.setState({num:this.state.num+1})}}> set number </div>
            <div>{this.state.num}{this.props.name}</div>
          </div>
        )
      }
}

export default StatePropsComp