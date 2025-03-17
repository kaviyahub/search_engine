import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Login from './login'
import Homepage from './homepage'
import './App.css'
import Aboutpage from './aboutpage'

function App() {
   return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Login/>}> </Route>
      <Route path='/homepage' element={<Homepage/>}> </Route>
      <Route path='/aboutpage' element={<Aboutpage/>}> </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
