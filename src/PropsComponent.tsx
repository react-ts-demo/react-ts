import * as React from 'react'

interface Inprops {
    name: string
}

export const MyComponent: React.SFC<Inprops> = (props: Inprops)=> {
    const {name} = props
    return(
        <div>{name}</div>
    )
}