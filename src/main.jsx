import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from '../src/routes/Home/Home.jsx'

const router = createBrowserRouter([{
  path:'/',element:<App/>,

  children:[
    {path:'/',element:<Home/>},
    {path:'/produto',element:<Produto/>}
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider/>
  </StrictMode>,
)
