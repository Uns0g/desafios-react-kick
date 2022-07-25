import '../App.css';
import { useState } from "react"
import S from './desafio23/soma';
import Sub from './desafio23/subtracao';
import M from './desafio23/multiplicacao';
import D from './desafio23/divisao';

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