var listaJogos = {"informacoes": [
	{"nome": "Alice, Isabele, Laura e Pedro", "imagem":"imagens/TCB.png", "link":"https://natalsupergeeks.github.io/Mural2019-2/jogos/TurtleCrossBeach/index.html"},
	{"nome": "Thiago e Guilherme", "imagem":"imagens/VDG.png", "link":"https://natalsupergeeks.github.io/Mural2019-2/jogos/AVidaDeUmGolfinho/index.html"},
	{"nome": "Pedro e Eduardo", "imagem":"imagens/PNI.png", "link":"https://natalsupergeeks.github.io/Mural2019-2/jogos/Perdido_na_Ilha.html"},
	{"nome": "Theo", "imagem":"imagens/SR.png", "link":"https://natalsupergeeks.github.io/Mural2019-2/jogos/SharkRescue.html"},
	{"nome": "Bruno, Gabriel, Luma, Marcos, Vitor", "imagem":"imagens/menu.png", "link":"https://natalsupergeeks.github.io/Mural2019-2/jogos/CacaALenda.apk"},
	
	
	
]};

window.onload = function() {
	var divConteudoJogos = document.getElementById("conteudo-jogos");
	//divConteudoJogos.innerHTML =  
	var i =0;
	var html = "";
	for (; i < listaJogos.informacoes.length; i++) {
		html = html.concat("<div class='col s10 m6 l3 offset-s1'>"+
		"<div class='card' style='min-height: 310px;'>"+
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