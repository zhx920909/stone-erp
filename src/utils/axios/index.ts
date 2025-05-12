import Axios from './Axios'

const httpInstance = new Axios({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000,
})

export default httpInstance
