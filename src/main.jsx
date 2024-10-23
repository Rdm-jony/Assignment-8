import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx'
import BookDetails from './Components/BookDetails/BookDetails.jsx'
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/listedBooks",
        loader:()=>fetch('books.json'),
        element: <ListedBooks></ListedBooks>
      }, {
        path: "/book/:id",
        element: <BookDetails></BookDetails>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,

)
