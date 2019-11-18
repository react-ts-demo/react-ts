
import * as React from 'react'
import Dialog from '@material-ui/core/Dialog';

interface SimpleDialogProps {
    open: boolean;
    // selectedValue: string;
    onClose: () => void;
    children: any;
}

export const SimpleDialog = (props: SimpleDialogProps) => {
    const {open, onClose} = props
    const handleClose = () =>{
        onClose()
    }
    return(
        <Dialog style={{width:'300px',height:'300px'}} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            {props.children}
            <div onClick={handleClose}>关闭</div>
        </Dialog>
    )
}