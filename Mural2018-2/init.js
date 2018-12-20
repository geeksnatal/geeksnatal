var listaJogos = {"informacoes": [
	{"nome": "Vitor e Maria Eduarda", "imagem":"imagens/PTI - FugaEscravos.png", "link":"https://natalsupergeeks.github.io/Mural2018-2/jogos/fuga_dos_escavos/index.html"},
	{"nome": "Bruno, Maria Luiza e Guilherme", "imagem":"imagens/PTI - curupiraAdventures.png", "link":"https://natalsupergeeks.github.io/Mural2018-2/jogos/curupira_adventures/index.html"},
	{"nome": "Rafael e Jorge", "imagem":"imagens/PTI - massacreCunhau.png", "link":"https://natalsupergeeks.github.io/Mural2018-2/jogos/massacreDeCunhau.html"},
	{"nome": "Tomaz ", "imagem":"imagens/PTI - DitaduraMilitar.png", "link":"https://natalsupergeeks.github.io/Mural2018-2/jogos/ditadura_militar.html"},
	{"nome": "Arthur, Alan e Leon", "imagem":"imagens/PTI - ExpulsaoHolandeses.png", "link":"https://natalsupergeeks.github.io/Mural2018-2/jogos/expulsaoDosHolandeses.html"},
	{"nome": "Pedro, Gabriel e Lucas", "imagem":"imagens/PTI - aBullsTrip.png", "link":"https://natalsupergeeks.github.io/Mural2018-2/jogos/aBullsTrip/index.html"},
	{"nome": "Davi e Arthur", "imagem":"imagens/PTI - OperacaoZumbi.png", "link":"https://natalsupergeeks.github.io/Mural2018-2/jogos/OperacaoZumbi/index.html"},
	{"nome": "Julio", "imagem":"imagens/PTI - Indio.png", "link":"https://natalsupergeeks.github.io/Mural2018-2/jogos/Indio/index.html"},
	{"nome": "Ian, Gustavo, Henrique, Matheus e Daniel", "imagem":"imagens/PTI - PortaDitadura.png", "link":"https://supergeeksnatal.itch.io/porta-da-ditadura"},
	{"nome": "Danilo, Murilo e Vinicius", "imagem":"imagens/PTI - MulaSemCabeca.png", "link":"https://supergeeksnatal.itch.io/MulaSemCabeca"},
	{"nome": "Pedro e Alberto", "imagem":"imagens/PTI - PedroAlberto.png", "link":"https://supergeeksnatal.itch.io/AlbertoPedro"},
	
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