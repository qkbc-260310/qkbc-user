export const config = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || '/api',
  mediaBaseUrl: import.meta.env.VITE_MEDIA_BASE_URL || '',
  useMock: import.meta.env.VITE_USE_MOCK !== 'false',
  appName: import.meta.env.VITE_APP_NAME || '青科博春小集',
}
