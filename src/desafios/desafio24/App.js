import './css/style.css';
import Header from './Header';
import Sugestoes from './Sugestoes';
import Lista from './Lista';

export default function App(){
	return(
		<div className="app">
			<Header/>
			<Sugestoes/>
			<Lista/>
		</div>
	);
}