import './css/style.css';
import Header from './Header';
import Sugestoes from './Sugestoes';

export default function App(){
	return(
		<div className="app">
			<Header/>
			<Sugestoes/>
		</div>
	);
}