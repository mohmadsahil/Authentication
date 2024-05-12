import './App.css'
import { Home } from './Components/Home/Home.jsx'
import { Login } from './Components/Login/Login.jsx'
import {Signup} from "./Components/Signup/Signup.jsx"
import {BrowserRouter,Route,Router, Routes} from "react-router-dom" 
 

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
