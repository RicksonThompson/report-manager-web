import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.REPORT_MANAGER_API_URL ?? 'http://localhost:8081',
})
