import React from "react";
import {Link} from "react-router-dom";

const Fold1 = ({r, g, b, rHandler, gHandler, bHandler}) => {
    const handleR = e => {
        if (isNaN(Number(e.target.value))) {
            alert("Введите число");}
        else {
        if (e.target.value < 0 || e.target.value > 255) {
            alert("ВВедите знаяяение от 0 до 255");
         } else {
           
             rHandler(e.target.value);}}}
    const handleG = e => {
        if (isNaN(Number(e.target.value))) {
            alert("Введите число");}
        else {
        if (e.target.value < 0 || e.target.value > 255) {
            alert("ВВедите знаяяение от 0 до 255");
         } else {
        gHandler(e.target.value);}}}
    const handleB = e => {
        if (isNaN(Number(e.target.value))) {
            alert("Введите число");}
        else {
        if (e.target.value < 0 || e.target.value > 255) {
            alert("ВВедите знаяяение от 0 до 255");
         } else {
        bHandler(e.target.value);}}}

        return (
        <>
        <div className="folds">
           <Link to={"/"}><div className="fold">Параметры</div></Link>
           <Link to={"/Fold2"}> <div className="fold">Код</div></Link>
           <Link to={"/Fold3"}> <div className="fold">Цвет</div></Link>
        </div>
        <div className="content">
            <span><b>Введите параметры</b></span>
            <span><i> числа в диапазоне от 0 до 255</i></span>
            <div className="inp"><span> R</span><input  value={r} placeholder="0" onChange={handleR}></input></div>
            <div className="inp"> <span> G</span><input value={g} placeholder="0" onChange={handleG}></input></div>
            <div className="inp"> <span> B</span><input value={b} placeholder="0" onChange={handleB}></input></div>
        </div>
        </>
    )}

export default Fold1;