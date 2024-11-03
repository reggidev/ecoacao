import { createBrowserRouter } from 'react-router-dom'

import { AboutUsPage } from './pages/about-us'
import { ContatoPage } from './pages/contact'
import { HomePage } from './pages/home'

export const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/sobre-nos', element: <AboutUsPage /> },
  { path: '/contato', element: <ContatoPage /> },
])
