import React from "react";
import { Link } from "react-router-dom";

const Fold2 = ({r, g, b}) => {
    if (r === "") r = "0";
    if (g === "") g = "0";
    if (b === "") b = "0";
    return (
        <>
        <div className="folds">
           <Link to={"/"}><div className="fold">Параметры</div></Link>
           <Link to={"/Fold2"}> <div className="fold">Код</div></Link>
           <Link to={"/Fold3"}> <div className="fold">Цвет</div></Link>
        </div>
        <div className="content">
           <span>RGB ({r} {g} {b})</span>
        </div>
       </>
   )}

export default Fold2;