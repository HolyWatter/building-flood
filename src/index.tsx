import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Router'
import '@styles/global.scss'
import Router from './Router'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from 'react-query'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>,
)
