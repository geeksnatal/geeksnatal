var listaJogos = {"informacoes": [
	{"imagem":"imagens/PTI - Hussein 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/projeto-hussein.html"},
	{"imagem":"imagens/PTI - Bernardo 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/projeto-bernardo.html"},
	{"imagem":"imagens/PTI - Luis Arthur 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/projeto-luisarthur.html"},
	{"imagem":"imagens/PTI - Daniel Lira 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/projeto-daniellira.html"},
	{"imagem":"imagens/PTI - Renan 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/projeto-renan.html"},
	{"imagem":"imagens/PTI - Davi Fase0 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/AnimalVsZombies/"},
	{"imagem":"imagens/PTI - Danilo Mafra 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/DefensorVsCacador/"},
	{"imagem":"imagens/PTI - Arthur Fase0 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/NaturezaRaivosa/"},
	{"imagem":"imagens/PTI - Rafael 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/Rafael/"},
	{"imagem":"imagens/PTI - Lucas Furtado 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/projeto-lucasfurtado.html"},
	{"imagem":"imagens/PTI - G2 Fase1 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/projeto-g2.html"},
	{"imagem":"imagens/PTI - G1 Fase1 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/projeto-g1.html"},
	{"imagem":"imagens/PTI - Matheus Carvalho 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/JogoMatheusCarvalho"}
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