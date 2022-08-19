export let filmesNaLista = [];
export const CAMINHO_DA_IMAGEM = 'https://image.tmdb.org/t/p/w1280';

export function adicionarFilmeNaLista(dadosDoFilme){
	const LISTA_EL = document.querySelector('.lista');

	filmesNaLista.push(dadosDoFilme);
	let ultimoFilmeNaLista = filmesNaLista.at(-1);

	const FILME_LISTA_EL = document.createElement('div');
	FILME_LISTA_EL.className = 'filme filme--na-lista';
	FILME_LISTA_EL.dataset.id = ultimoFilmeNaLista.id;
	FILME_LISTA_EL.innerHTML = `
	<div class="filme__titulo"><h3>${ultimoFilmeNaLista.original_title}</h3></div>
	<div class="filme__imagem" style="background-image: url('${CAMINHO_DA_IMAGEM+ultimoFilmeNaLista.poster_path}');"></div>
	<div class="filme__info">
		<ul>
			<li>LANÇAMENTO: ${ultimoFilmeNaLista.release_date}</li>
			<li>NOTA MÉDIA: <strong>${ultimoFilmeNaLista.vote_average}</strong> | <small>Baseado em ${ultimoFilmeNaLista.vote_count} votos</small></li>
		</ul>
		<p>
			${ultimoFilmeNaLista.overview}
		</p>
		<button class="filme__botao">Remover Da Lista</button>
	</div>`;

	const REMOVER_FILME_BTN = FILME_LISTA_EL.querySelector('.filme__botao');
	REMOVER_FILME_BTN.onclick = () => removerFilmeDaLista(FILME_LISTA_EL.dataset.id);

	LISTA_EL.appendChild(FILME_LISTA_EL);
}

function removerFilmeDaLista(idDoFilme){
	const FILMES_NA_LISTA_ELS = document.querySelectorAll('.filme--na-lista');

	FILMES_NA_LISTA_ELS.forEach(FILME_NA_LISTA_EL =>{
		if(FILME_NA_LISTA_EL.dataset.id === idDoFilme){
			FILME_NA_LISTA_EL.remove();
			
			let filmeASerRemovidoNaLista = filmesNaLista.find(filme => filme.id === idDoFilme);
			filmesNaLista.splice(filmeASerRemovidoNaLista, 1);


			console.log(filmesNaLista);
		}
	});
}

export default function Lista(){
	return(
		<section>
			<center><u><h2>Filmes Na Minha Lista</h2></u></center>
			<div className="lista lista--hidden"></div>
		</section>
	);
}
