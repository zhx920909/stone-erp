import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'

class Axios {
    private instance: AxiosInstance

    private interceptorsRequest() {
        // 添加请求拦截器
        this.instance.interceptors.request.use(
            (config) => {
                // 在发送请求之前做些什么
                return config
            },
            (error) => {
                // 对请求错误做些什么
                return Promise.reject(error)
            }
        )
    }

    private interceptorResponse() {
        // 添加响应拦截器
        this.instance.interceptors.response.use(
            (response) => {
                // 2xx 范围内的状态码都会触发该函数。
                // 对响应数据做点什么
                return response
            },
            (error) => {
                // 超出 2xx 范围的状态码都会触发该函数。
                // 对响应错误做点什么
                return Promise.reject(error)
            }
        )
    }

    private interceptors() {
        this.interceptorsRequest()
        this.interceptorResponse()
    }

    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config)
        this.interceptors()
    }

    public request<T = any>(config: AxiosRequestConfig): Promise<T> {
        return new Promise((resolve, reject) => {
            this.instance
                .request<any, T>(config)
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }

    public get<T = any>(config: AxiosRequestConfig): Promise<T> {
        return this.request({ ...config, method: 'GET' })
    }

    public post<T = any>(config: AxiosRequestConfig): Promise<T> {
        return this.request({ ...config, method: 'POST' })
    }

    public put<T = any>(config: AxiosRequestConfig): Promise<T> {
        return this.request({ ...config, method: 'PUT' })
    }

    public delete<T = any>(config: AxiosRequestConfig): Promise<T> {
        return this.request({ ...config, method: 'DELETE' })
    }
}

export default Axios
