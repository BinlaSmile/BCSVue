import axios from 'axios'
import { Loading, Message } from 'element-ui'
import router from './router'
import store from './store'
// axios.defaults.timeout = 6000
let loading = null
// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    let params = config.data || config.params || {}
    if (!params._hiding) { // 默认情况调用接口时，弹出遮盖，上送_hiding时不显示遮盖
      loading = Loading.service({
        spinner: 'el-icon-loading'
      })
    }
    if (sessionStorage.getItem('token')) {
      config.headers.Authorization = sessionStorage.getItem('token')
    }
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    loading && loading.close()
    if (response.headers.authorization) {
      sessionStorage.setItem('token', response.headers.authorization)
    }
    if (response.data.code === 200) {
      return response.data
    } else if (response.data.code === 70002) {
      // Message.error(response.data.msg)
      store.commit('resetState')
      router.push('/login')
      return Promise.reject(response.data.msg)
    } else if (response.request.responseType === 'blob') {
      return response
    } else {
      Message.error(response.data.msg)
      return Promise.reject(response.data.msg)
    }
  },
  function (error) {
    loading && loading.close()
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
export default axios
