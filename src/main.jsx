import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Game from './components/Game.jsx'
import Intro from './components/Intro.jsx'
import Theme from './components/Theme.jsx'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/', 
    element: <App/>,
    children : [
      {
        path: '',
        element: <Intro/>
      },
      {
        path: 'game',
        element: <Game/>
      },
      {
        path:'theme',
        element: <Theme/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
