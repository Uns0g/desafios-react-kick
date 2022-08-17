import {criarElementoDoFilme} from './Sugestoes';

const API_KEY = "?api_key=959085f581801bd27eb0bb602ec7624d";
const API_URL =
  "https://api.themoviedb.org/3/movie/550?api_key=959085f581801bd27eb0bb602ec7624d";

let searchAPI =
  "https://api.themoviedb.org/3/search/movie" + API_KEY + "&region=pt-BR&query=";

async function buscarFilme(){
	let textoParaBusca = document.getElementById('pesquisa-filme').value;

	let url = searchAPI+textoParaBusca;
	const RESPOSTA = await fetch(url);
	const DADOS = await RESPOSTA.json();

	mostrarFilmes(DADOS.results);
}

function mostrarFilmes(dadosDosFilmes){
	const MOSTRAR_FILMES_EL = document.querySelector('.sugestoes__resultado');

	for(let filmeIndice = 0; filmeIndice < dadosDosFilmes.length; filmeIndice++){
		criarElementoDoFilme(dadosDosFilmes[filmeIndice])
	}
}

export default function Header(){
	return(
		<header className="header">
			<h1 className="header__titulo">Minha Lista De Filmes</h1>
			<nav className="header__botoes-container">
				<input type="search" className="header__barra-de-pesquisa" id="pesquisa-filme" placeholder="Pesquise por um filme"/>
				<button className="header__botao" onClick={buscarFilme}>Buscar Filme</button>
				<button className="header__botao header__botao--mostrar">Mostrar Lista</button>
			</nav>
		</header>
	);
}