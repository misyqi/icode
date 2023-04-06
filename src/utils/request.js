import axios from "axios";

const service = axios.create({
    baseURL:import.meta.env.VITE_BASE_API,
    timeout:5000
})



// 响应拦截器
service.interceptors.response.use(
    (response) => {
      const { success, message, data } = response.data
      //   要根据success的成功与否决定下面的操作
      if (success) {
        return data
      } else {
        $message('warn', message)
        // TODO：业务错误
        return Promise.reject(new Error(message))
      }
    },
    (error) => {
      // 处理 token 超时问题
      if (
        error.response &&
        error.response.data &&
        error.response.data.code === 401
      ) {
        // TODO: token超时
        store.dispatch('user/logout')
      }
      $message('error', error.response.data.message)
      // TODO: 提示错误消息
      return Promise.reject(error)
    }
  )
  

export default service