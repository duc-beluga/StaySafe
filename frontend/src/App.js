import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom'
import SignUp from "./pages/SignUp";


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
  );
}

export default App;
