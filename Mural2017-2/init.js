var listaJogos = {"informacoes": [
	{"nome": "Hussein", "imagem":"imagens/PTI - Hussein 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/projeto-hussein.html"},
	{"nome": "Bernardo", "imagem":"imagens/PTI - Bernardo 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/projeto-bernardo.html"},
	{"nome": "Luis Arthur", "imagem":"imagens/PTI - Luis Arthur 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/projeto-luisarthur.html"},
	{"nome": "Daniel Lira", "imagem":"imagens/PTI - Daniel Lira 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/projeto-daniellira.html"},
	{"nome": "Lara", "imagem":"imagens/PTI - Lara 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/projeto-lara.html"},
	{"nome": "Renan", "imagem":"imagens/PTI - Renan 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/projeto-renan.html"},
	{"nome": "Davi", "imagem":"imagens/PTI - Davi Fase0 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/AnimalVsZombies/"},
	{"nome": "Danilo", "imagem":"imagens/PTI - Danilo Mafra 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/DefensorVsCacador/"},
	{"nome": "Arthur", "imagem":"imagens/PTI - Arthur Fase0 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/NaturezaRaivosa/"},
	{"nome": "Rafael", "imagem":"imagens/PTI - Rafael 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/Rafael/"},
	{"nome": "Lucas", "imagem":"imagens/PTI - Lucas Furtado 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/projeto-lucasfurtado.html"},
	{"nome": "Malu, Samuel, Henry e Luca", "imagem":"imagens/PTI - G2 Fase1 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/projeto-g2.html"},
	{"nome": "Davi, Matheus e Filipe", "imagem":"imagens/PTI - G1 Fase1 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/projeto-g1.html"},
	{"nome": "Matheus", "imagem":"imagens/PTI - Matheus Carvalho 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/JogoMatheusCarvalho"},
	{"nome": "Maria", "imagem":"imagens/PTI - Maria Isabel 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/JogoMariaIsabel"},
	{"nome": "Oliver", "imagem":"imagens/PTI - Oliver 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/JogoOliver"},
	{"nome": "Pedro Aquino", "imagem":"imagens/PTI - Pedro Aquino 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/JogoPedroAquino"},
	{"nome": "Guilherme", "imagem":"imagens/PTI - Gui Fernandes 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/JogoGuiFernandes"},
	{"nome": "Davi, Gustavo e Levi", "imagem":"imagens/PTI - Grupo Quarta Fase2 2017.2.png", "link":"https://natalsupergeeks.github.io/Mural2017-2/jogos/TheMightyAdventuresOfASeed"}
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