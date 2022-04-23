
import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";
import About from "./About";
import Categories from "./Categories";
import Home from "./Home";
import Search from "./Search";
import { GlobalStyle } from "./theme/GlobalStyle";
import 'bootstrap/dist/css/bootstrap.min.css';
import './theme/style.css';
import SmartPhone from "./SmartPhone";
import Tablet from "./tablet";
import Laptop from "./Laptop";
import ERROR from "./ERROR";
const App = ()=>{
    return (
    <>
        <GlobalStyle/>
        <BrowserRouter>
            <header className="d-flex nav">
                <div className="navbar col mx-5">
                    <h1 className="brand ">TECH</h1>
                </div>
                <div className="flex-row justify-content-end">
                    <nav className='nav-item my-2'>
                        <NavLink className={({isActive})=>(isActive?"active-link p-2" : "link p-2")} to='/'>Home</NavLink>
                        <NavLink className={({isActive})=>(isActive?"active-link p-2" : "link p-2")} to='/devices'>devices</NavLink>
                        <NavLink className={({isActive})=>(isActive?"active-link p-2" : "link p-2")} to='/search'>Search</NavLink>
                        <NavLink className={({isActive})=>(isActive?"active-link p-2" : "link p-2")} to='/about-tech'>AboutTECH</NavLink>
                    </nav>
                </div>
            </header>
            <Routes>
                <Route path='/Home' element={<Navigate to='/'/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/devices' element={<Categories/>}>
                    <Route path='smartphone' element={<SmartPhone/>}/>
                    <Route path='Tablet' element={<Tablet/>}/>
                    <Route path='Laptop' element={<Laptop/>}/>
                </Route>
                <Route path='/Search' element={<Search/>}/>
                <Route path='/about-tech' element={<About/>}/>
                <Route path='*' element={<ERROR/>} />
            </Routes>
        </BrowserRouter>
    </>
        )
}
export default App;