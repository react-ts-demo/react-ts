import * as React from 'react'
import {useState} from 'react'

interface Inprops {
    name:string
}
//待解决，如何使用useState实现
// interface InState {
//     num: number
//     [propName: string]: any
// }

const RfcComp: React.SFC<Inprops> = (props: Inprops) => {
    const {name} = props
    let [num, setNum] = useState(0)
    return(
        <div>
            <div onClick={()=>{setNum(num++)}}>click</div>
            <div>
                {name}
                {num}
            </div>
        </div>
    )
}

export default RfcComp