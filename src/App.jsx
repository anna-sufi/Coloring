import React, { useState } from 'react';
import {Routes, Route} from "react-router-dom";
import Fold1 from './components/Fold1';
import Fold2 from "./components/Fold2";
import Fold3 from "./components/Fold3";

function App () {
	const [r, setR] = useState(0);
	const [g, setG] = useState(0);
	const [b, setB] = useState(0);
	const rHandler = val => {
		console.log("app R", val);
        setR(val);}
	const gHandler = val => {
		console.log("app G", val);
        setG(val);}
	const bHandler = val => {
		console.log("app B", val);
        setB(val);}
	
	return <>
		<main>
		 <Routes>
             <Route path="/" element={<Fold1  r={r} g={g} b={b} rHandler={rHandler} gHandler={gHandler} bHandler={bHandler}/>}/>
             <Route path="/Fold2" element={<Fold2 r={r} g={g} b={b}/>}/>
             <Route path="/Fold3" element={<Fold3 r={r} g={g} b={b}/>}/>
		 </Routes>
		</main>
	</>
}

export default App;