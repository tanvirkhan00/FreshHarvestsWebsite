import { createBrowserRouter, Route, RouterProvider } from "react-router"
import { createRoutesFromElements } from "react-router"
import Home from "./Pages/Home"
import DetailsProducts from "./Pages/DetailsProducts"
import Login from "./Pages/Login"
import Register from "./Pages/Register"

function App() {

  let router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<DetailsProducts />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signIn" element={<Register />} />
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router}></RouterProvider>

    </>
  )
}

export default App
