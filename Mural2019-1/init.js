var listaJogos = {"informacoes": [
	{"nome": "Luis Henrique, Arthur e Luma", "imagem":"imagens/LAL.png", "link":"https://natalsupergeeks.github.io/Mural2019-1/jogos/Projeto_lal.html"},
	{"nome": "Bruno, Gabriel, Marcos e Vitor", "imagem":"imagens/Apeste.png", "link":"https://natalsupergeeks.github.io/Mural2019-1/jogos/A_peste.html"},
	{"nome": "Alan e Jorge", "imagem":"imagens/LOJ.png", "link":"https://natalsupergeeks.github.io/Mural2019-1/jogos/LOJ/index.html"},
	
	
	
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