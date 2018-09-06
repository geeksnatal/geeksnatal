var lista = {"informacoes": [
	{"imagem":"imagens/image10.png", "valor":"1550GP"},
	{"imagem":"imagens/image11.png", "valor":"1550GP"},
	{"imagem":"imagens/image12.png", "valor":"1550GP"}
]};

window.onload = function() {
	var divConteudoJogos = document.getElementById("conteudo-jogos");
	//divConteudoJogos.innerHTML =  
	var i =0;
	var html = "";
	for (; i < lista.informacoes.length; i++) {
		html = html.concat("<div class='col s12 m6 l3'><div class='card-panel hoverable' style= 'background-image: url(\""+lista.informacoes[i].imagem+"\"); background-position: center; background-repeat: no-repeat;'></div><p align='center'>"+lista.informacoes[i].valor+"</p></div>");
	}
	divConteudoJogos.innerHTML = html;
};