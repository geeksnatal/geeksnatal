var listaJogos = {"informacoes": [
	{"imagem":"imagens/vamosReciclar.png", "link":"https:\/\/natalsupergeeks.github.io/muralOver/vamosReciclar/"},
	{"imagem":"imagens/fugaFlorestal.png", "link":"https://natalsupergeeks.github.io/muralOver/fugaFlorestal/"},
	{"imagem":"imagens/runFish.png", "link":"https://natalsupergeeks.github.io/muralOver/runFish/"},
	{"imagem":"imagens/garbageRain.png", "link":"https://natalsupergeeks.github.io/muralOver/garbageRain/"},
	{"imagem":"imagens/TCC - Augusto.png", "link":"https://natalsupergeeks.github.io/muralOver"}
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