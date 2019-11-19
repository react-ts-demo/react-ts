import axios from 'axios'

const baseURL = 'wwww.baidu.com'

const http = axios.create({
    baseURL,
})

http.interceptors.request.use((config: any) => {
    //在这里带上token请求
    return config
})

http.interceptors.response.use((resp:any) => {
    return resp
})

const httpRequest = (ss:any) => {
   return http.post('/sss/dd', {
       ss
   })
}

export {
    httpRequest
}