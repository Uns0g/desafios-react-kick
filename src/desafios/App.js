import '../App.css';
import { useState } from "react"
import S from './outros_componentes/soma';
import Sub from './outros_componentes/subtracao';
import M from './outros_componentes/multiplicacao';
import D from './outros_componentes/divisao';

export default function App(){
	return(
		<div>
			<header>
				<h1>Operações com 0 com 1</h1>
			</header>
			<main>
				<S valor0={0} valor1={1}/>
				<Sub valor0={0} valor1={1}/>
				<M valor0={0} valor1={1}/>
				<D valor0={0} valor1={1}/>
			</main>
		</div>
	);
}