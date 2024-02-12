import { boot } from 'quasar/wrappers'
import axios from 'axios'

export const BaseURL = 'api'

const api = axios.create({
  baseURL: BaseURL,
  headers: {
    'Content-type': 'application/json'
  }
})

export default boot(({ app, router, store }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

export { axios, api }
