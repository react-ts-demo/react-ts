
const websocket:(url:string )=>void = (url:string) => {
    //Websocket 使用 ws 或 wss 的统一资源标志符，类似于 HTTPS
    const ws = new WebSocket(url)//url需要时ws:或者wss格式，类似http
    switch(ws.readyState) {
        case 0: console.log('表示连接尚未建立')
        case 1: console.log('表示连接已建立，可以进行通信')
        case 2: console.log('表示连接正在进行关闭')
        case 3: console.log('表表示连接已经关闭或者连接不能打开')
    }
    ws.onopen = () => {
        //表示已经连接上
        ws.send('发送数据')
        console.log('数据已发送')
    }
    ws.onmessage = (evt:any) => {
        //接收消息
        let received = evt.data
        console.log('接收到数据'+received)     
    }
    ws.onclose = () => {
        //关闭连接
        console.log('连接已关闭')
    }
}

export {
    websocket
}