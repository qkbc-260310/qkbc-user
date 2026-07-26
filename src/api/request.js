import { config } from '@/config'
export async function request(path, options = {}) { const response = await fetch(`${config.apiBaseUrl}${path}`, { headers: { 'Content-Type': 'application/json', ...options.headers }, ...options }); const data = await response.json(); if (!response.ok) throw new Error(data?.detail || '请求失败'); return data }
export const get = (path, options) => request(path, { ...options, method: 'GET' })
export const post = (path, data, options) => request(path, { ...options, method: 'POST', body: JSON.stringify(data) })
