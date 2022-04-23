import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./theme/style.css";

const Categories = ()=>{
    return(
        <>
            <div className="row container">
                <div>    
                    <h1 className="m-4">Devices</h1>
                    <div className="mx-5 my-2">
                        <Link  className="d-block p-2 d-link" to="/devices/smartphone">Smartphone</Link>
                    </div>
                    <div className="mx-5 my-2 ">
                        <Link  className="d-block p-2 d-link" to="/devices/laptop">Laptop</Link>
                    </div>
                    <div className="mx-5 my-2 ">
                        <Link  className="d-block p-2 d-link" to="/devices/tablet">Tablet</Link>
                    </div>
                </div>    
            </div>
            <Outlet/>   
        </>
    )
}
export default Categories;