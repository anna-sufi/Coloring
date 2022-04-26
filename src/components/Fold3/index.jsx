import React from "react";
import { Link } from "react-router-dom";

const Fold3 = ({r, g, b}) => {
    let st = { backgroundColor: `rgb(${r}, ${g}, ${b})`}
           
    return (
        <>
       <div className="folds">
           <Link to={"/"}><div className="fold">Параметры</div></Link>
           <Link to={"/Fold2"}> <div className="fold">Код</div></Link>
           <Link to={"/Fold3"}> <div className="fold">Цвет</div></Link>
        </div>
        <div className="content">
            <div className="result" style={st}></div>
        </div>
        </>
    )}

export default Fold3;