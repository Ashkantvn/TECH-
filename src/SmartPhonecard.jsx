import "./theme/style.css";
import { useState } from "react";
const SmartPhoneCard = (props) =>{
    const [Display, setDisplay] = useState("none");
    function Clickedcard(){
        setDisplay("block");
    }
    function ClickedClose(){
        setDisplay("none");
    }
    return(
        <>
            <div className="card-size">
                    <div className="card-background-header">
                        <div className="d-flex justify-content-center">
                            picture
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div>
                            <div>
                                <h1 className="d-flex justify-content-center">{props.name}</h1>
                            </div>
                            <div className="d-flex justify-content-center">
                                <span className="p-2 font-card">CPU : {props.cpu}</span>
                                <span className="p-2 font-card">Ram : {props.ram}</span>
                            </div>
                            <div className="d-flex justify-content-center">
                                <span className="p-2 font-card">Rom : {props.rom}</span>
                                <span className="p-2 font-card">Battery : {props.battery}</span>
                            </div>
                            <div  className="py-3 d-flex justify-content-center">    
                                <button onClick={Clickedcard} className="card-btn">more</button>
                            </div>       
                        </div>
                    </div>
            </div>
            <div className={Display}>
                <div className="d-flex justify-content-center">
                    <div className="css-modal-content ">
                        <button className="search-btn" onClick={ClickedClose}>close</button>  
                        <div className="row m-3">
                            <div className="col about-h1">
                                <span>picture</span>
                            </div>
                            <div className="col">
                                <h1>name : {props.name}</h1>
                                <div>
                                    <h2>rating : {props.rate}/5</h2>
                                </div>
                                <div>
                                    <h3>Date of release : {props.date}</h3>
                                </div>
                                <div>
                                    <h4>screen: AMOLED/5.5inches</h4>
                                    <h4>Colors: {props.color}</h4>
                                    <div>
                                        <h4> reveiews:</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                             Reiciendis doloribus recusandae nam nobis. Ipsum quo voluptatibus officiis
                                              reprehenderit soluta atque possimus,
                                             similique cupiditate explicabo repellendus laudantium! Sunt laboriosam sit quo 
                                             Reiciendis doloribus recusandae nam nobis. Ipsum quo voluptatibus officiis
                                              reprehenderit soluta atque possimus,
                                             similique cupiditate explicabo repellendus laudantium! Sunt laboriosam sit quo 
                                             Reiciendis doloribus recusandae nam nobis. Ipsum quo voluptatibus officiis
                                              reprehenderit soluta atque possimus,
                                             similique cupiditate explicabo repellendus laudantium! Sunt laboriosam sit quo 
                                             Reiciendis doloribus recusandae nam nobis. Ipsum quo voluptatibus officiis
                                              reprehenderit soluta atque possimus,
                                             similique cupiditate explicabo repellendus laudantium! Sunt laboriosam sit quo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>    
            </div>
        </>
    )
}
export default SmartPhoneCard;
