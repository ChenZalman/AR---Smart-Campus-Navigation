import LoginPage from './LoginPage';
import About from './About';
import Home from './Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import NavBar from './NavBar';
import PageNotFound from './NotFoundPage';
 import './index.css'
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/LoginPage" element={<LoginPage/>}/>
        {/* <Route exact path="/ForgotPassword" element={<ForgotPassword/>}/> */}
        {/* <Route exact path="/RegisterPage" element={<RegisterPage/>}/> */}
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
