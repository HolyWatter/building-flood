import axios from 'axios'

const BASE_RUL = process.env.REACT_APP_BASE_URL

const api = axios.create({
  baseURL: BASE_RUL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
