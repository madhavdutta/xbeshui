import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '../packages/index.css'
import { XbeshProvider } from '../packages/core/components/Theme/xBeshTheme/xbeshProvider.tsx'
import { Toaster } from '../packages/core/components/Feedback/toast/toaster.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <XbeshProvider storageKey={'vite'} defaultTheme={'light'}><App /></XbeshProvider>
     <Toaster />
  </React.StrictMode>,
)
