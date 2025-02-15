var listaJogos = {"informacoes": [
	{"nome": "João Guilherme", "imagem":"imagens/PTI - joaoGuilherme.png", "link":"https://natalsupergeeks.github.io/Mural2018-1/jogos/projeto_joaoGuilherme.html"},
	{"nome": "Hussein", "imagem":"imagens/PTI - Hussein.png", "link":"https://natalsupergeeks.github.io/Mural2018-1/jogos/PTI-Hussein/index.html"},
	{"nome": "Julio", "imagem":"imagens/PTI - Julio.png", "link":"https://natalsupergeeks.github.io/Mural2018-1/jogos/PTI-Julio/index.html"},
	{"nome": "Daniel, Henrique, Ian e Matheus", "imagem":"imagens/PTI - Porta.png", "link":"https://natalsupergeeks.github.io/Mural2018-1/jogos/porta_the_game"},
	{"nome": "Alberto, Luis e Pedro", "imagem":"imagens/PTI - MACR.png", "link":"https://natalsupergeeks.github.io/Mural2018-1/jogos/GAME-MACR/index.html"},
	{"nome": "Marco Antônio, Ian, Vinícius e Arthur", "imagem":"imagens/PTI - GordinhoBR123.png", "link":"https://natalsupergeeks.github.io/Mural2018-1/jogos/projeto_gordinhoBR123.html"},
	{"nome": "Pedro, Luís Guilherme e Lucas", "imagem":"imagens/PTI - TimeAttak.png", "link":"https://natalsupergeeks.github.io/Mural2018-1/jogos/projeto_programadoresDoFuturo.html"},
	{"nome": "Gabriel, Arthur e Davi", "imagem":"imagens/PTI - protech.png", "link":"https://natalsupergeeks.github.io/Mural2018-1/jogos/projeto_protech.html"},
	
]};

window.onload = function() {
	var divConteudoJogos = document.getElementById("conteudo-jogos");
	//divConteudoJogos.innerHTML =  
	var i =0;
	var html = "";
	for (; i < listaJogos.informacoes.length; i++) {
		html = html.concat("<div class='col s10 m6 l3 offset-s1'>"+
		"<div class='card'>"+
        "<div class='card-image'>"+
          "<a target='_blank' href='"+listaJogos.informacoes[i].link+"'><img src='"+listaJogos.informacoes[i].imagem+"'></a>"+         
         " <a class='btn-floating halfway-fab waves-effect waves-light red' target='_blank' href='"+listaJogos.informacoes[i].link+"'><i class='material-icons'>play_arrow</i></a>"+
        "</div>"+
        "<div class='card-content'>"+
		" <span class='card-title'>"+listaJogos.informacoes[i].nome+"</span>"+        
        "</div>"+
     " </div>"+
   " </div>");
	}
	divConteudoJogos.innerHTML = html;
};