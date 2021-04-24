import axios from 'axios'

const axiosConfig = axios.create({
  baseURL: 'https://www.abibliadigital.com.br/api',
  headers: { Authorization: `Bearer ${process.env.TOKEN}` }
})

export default axiosConfig
