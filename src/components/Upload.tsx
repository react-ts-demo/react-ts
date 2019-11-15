import * as React from 'react';
import {useEffect} from 'react'
// import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

interface UpProps {
    url?: string,
    id?: string
}

export const Upload: React.SFC<UpProps> = (props: UpProps) => {
    const {url, id} = props
    const [state, setState] = React.useState(0 as number)
    useEffect(()=>{
        setState(3)
    },[])
    return (
        <>
        <Button>{url} {id} test</Button>
        <Button variant="contained" color="primary">
        上传 {state}
        </Button>
        </>
    )
}