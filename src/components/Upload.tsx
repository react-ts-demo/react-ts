import * as React from 'react'
import Button from '@material-ui/core/Button'

/*
@params url 发送链接
@params method请求方法post/get
@params id 其他参数
@params 请求发送后回调函数
*/
interface UpProps {
    url: string,
    method?: string,
    id?: string,
    callBack(res: any): void
}

export const Upload: React.SFC<UpProps> = (props: UpProps) => {
    const {url, id, method = 'post', callBack} = props
    const [src ,setSrc] = React.useState('' as string)
    const [fileForm, setFileForm] = React.useState('' as any)
//预览图片并保存文件
    const previewImg = () => {
        let form =new FormData()
        let input = document.createElement('input')
        let reads = new FileReader()
        input.type = 'file'
        input.accept="image/*"
        input.click()
        input.onchange = () =>{
            let file = input.files![0]
            form.append('file', file)
            if(id) form.append('id', id)
            //保存文件
            setFileForm(setFileForm)

            reads.readAsDataURL(file)
            reads.onload = function (e) {
                setSrc(this.result as string)
            }
        }
    }
//上传文件
    const uploadOnclick = () => {
        fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' 
            },
            body: fileForm
        })
        .then(response => response.json())
        .then(res => {
            //这个方法应该在使用时传递
            callBack(res)
        })
        .catch(function(error) {
            console.log('request failed: ', error)
        })
    }
    return (
        <>
        <Button onClick={previewImg}>+</Button>
        <Button variant="contained" color="primary"  onClick={uploadOnclick}>上传 </Button>
       <img src={src} id='img' alt='img'></img>
        </>
    )
}