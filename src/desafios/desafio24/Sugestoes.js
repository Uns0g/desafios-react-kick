import {adicionarFilmeNaLista, CAMINHO_DA_IMAGEM} from './Lista';

export function criarElementoDoFilme(dadosDoFilme){
	const SUGESTOES_EL = document.querySelector('.sugestoes__resultado');

	let {original_title, overview, poster_path, release_date, vote_average, vote_count} = dadosDoFilme;
	let dataDeLancamento = new Date(release_date);

	const FILME_EL = document.createElement('div');
	FILME_EL.className = 'filme';
	FILME_EL.innerHTML = `
	<div class="filme__titulo"><h3>${original_title}</h3></div>
	<div class="filme__imagem" style="background-image: url('${CAMINHO_DA_IMAGEM+poster_path}');"></div>
	<div class="filme__info">
		<p>
			${overview}
		</p>
		<div class="filme__botoes">
			<button class="filme__botao">Adicionar à lista</button>
			<button class="filme__botao">Não é este filme</button>
		</div>
		<ul>
			<li>LANÇAMENTO: ${dataDeLancamento.toLocaleDateString()}</li>
			<li>NOTA MÉDIA: <strong>${vote_average}</strong> | <small>Baseado em ${vote_count} avaliações.</small></li>
		</ul>
	</div>`;

	const BOTAO_ADICIONAR_FILME = FILME_EL.querySelector('.filme__botao:first-of-type');
	BOTAO_ADICIONAR_FILME.addEventListener('click', () => adicionarFilmeNaLista(dadosDoFilme));

	const BOTAO_APAGAR_FILME = FILME_EL.querySelector('.filme__botao:last-of-type');
	BOTAO_APAGAR_FILME.onclick = () => FILME_EL.remove();

	SUGESTOES_EL.appendChild(FILME_EL);
}

export default function Sugestoes(){
	return(
		<section className="sugestoes sugestoes--hidden">
			<h2>Resultado Da Pesquisa</h2>
			<div className="sugestoes__resultado">
			</div>
		</section>
	);
}