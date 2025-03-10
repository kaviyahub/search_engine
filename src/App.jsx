import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Login from './login'
import Homepage from './homepage'
import './App.css'

function App() {
   return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Login/>}> </Route>
      <Route path='/homepage' element={<Homepage/>}> </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
