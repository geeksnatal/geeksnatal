var listaJogos = {"informacoes": [
	{"imagem":"imagens/aluno desconhecido.png", "link":"https:\/\/natalsupergeeks.github.io/Aluno/"},
	{"imagem":"imagens/Aula Demo - LUIS MIGUEL.png", "link":"https://natalsupergeeks.github.io/LuisMiguel/"},
	{"imagem":"imagens/Aula Demo - RAFAEL.png", "link":"https://natalsupergeeks.github.io/Rafael/"},
	{"imagem":"imagens/TCC - DAVI.png", "link":"https://natalsupergeeks.github.io/Davi/"},
	{"imagem":"imagens/TCC - Augusto.png", "link":"https://natalsupergeeks.github.io/Augusto/"},
	{"imagem":"imagens/PTI - Daniel Lira.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/projeto-daniellira.html"}
]};

window.onload = function() {
	var divConteudoJogos = document.getElementById("conteudo-jogos");
	//divConteudoJogos.innerHTML =  
	var i =0;
	var html = "";
	for (; i < listaJogos.informacoes.length; i++) {
		html = html.concat("<div class='col s12 m6 l3'><a target='_blank' href='"+listaJogos.informacoes[i].link+"'><div class='card-panel hoverable' style= 'background-image: url(\""+listaJogos.informacoes[i].imagem+"\"); background-position: center; background-repeat: no-repeat;'></div></a></div>");
	}
	divConteudoJogos.innerHTML = html;
};