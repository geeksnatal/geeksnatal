var dadosAlunos = [];
var aluno = null;

$(document).ready(function(){
	 $.getJSON('https://script.googleusercontent.com/macros/echo?user_content_key=HIN8gQFiv_1jx8cWnatVVRNbbV32ZeybGpCmMb8vKJhE7-yqFeeKoguwRjaL-wnbpxNige01GD4xDyrvEi9GxCTXRR0qrD2tOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa1GhPSVukpSQTydEwAEXFXgt_wltjJcH3XHUaaPC1fv5o9XyvOto09QuWI89K6KjOu0SP2F-BdwUrEtfYzJQrYWY3EAenVn4SWsQbZP3eYQz8RU9KBejdSK-Cqqm_3pi7zE4rkx3h83O-oBv2yn8aSG3c-7T2ckeCw&lib=MnrE7b2I2PjfH799VodkCPiQjIVyBAxva', function(data){
		popularJson(data);
		//popularJsonDadosAcesso(data);
		fazerLogin();	
		popularInfoAluno();
		popularTabelaFrequencia();
		popularTabelaDadosAcesso();
	 });
	
});

function fazerLogin() {	
	while(true) {
		var login = prompt("Informe seu login para continuar.");
		aluno = buscarAlunoPorLogin(login);
		if (aluno != null){
			alert(aluno.responsavel);
			break;
		} else {
			alert("Login inválido!");
		}
	}
}

function buscarAlunoPorLogin(login) {
	for(var i=0; i<dadosAlunos.length; i++){
		if(login == dadosAlunos[i].login) {
			return dadosAlunos[i];
		}
	}
	return null;
}

function popularJsonDadosAcesso(data) {
  var dadosJSON = data.Pag4;
  for (var linha = 0; linha < dadosJSON.length; linha++) {
	  var dados_linha = dadosJSON[linha];   
	  dadosAlunos[linha].login_classcraft = dados_linha[login_classcraft];
	  dadosAlunos[linha].senha_classcraft = dados_linha[senha_classcraft];
	  dadosAlunos[linha].login_portal = dados_linha[login_portal];
	  dadosAlunos[linha].senha_portal = dados_linha[senha_portal];
	  dadosAlunos[linha].login_email = linha[login_email];
	  dadosAlunos[linha].senha_email = dados_linha[senha_email];
  }
}

function popularJson(data) {
  var dadosJSON = data.Pag4;
  for (var linha = 0; linha < dadosJSON.length; linha++) {
    var dados_linha = dadosJSON[linha];    
	dadosAlunos[linha] = {
		aluno: dados_linha[col_aluno],
		curso: dados_linha[col_curso],
		responsavel: dados_linha[col_responsavel],
		login: dados_linha[col_login],
		login_classcraft: "",
		senha_classcraft: "",
		login_portal: "",
		senha_portal: "",
		login_email: "",
		senha_email: "",
		frequencia: {
			aula01: dados_linha[freq_a1],
			aula02: dados_linha[freq_a2],
			aula03: dados_linha[freq_a3],
			aula04: dados_linha[freq_a4],
			aula05: dados_linha[freq_a5],
			aula06: dados_linha[freq_a6],
			aula07: dados_linha[freq_a7],
			aula08: dados_linha[freq_a8],
			aula09: dados_linha[freq_a9],
			aula10: dados_linha[freq_a10],
			aula11: dados_linha[freq_a11],
			aula12: dados_linha[freq_a12],
			aula13: dados_linha[freq_a13],
			aula14: dados_linha[freq_a14],
			aula15: dados_linha[freq_a15],
			aula16: dados_linha[freq_a16],
			aula17: dados_linha[freq_a17],
		},
		comportamento: {
			aula01: dados_linha[comportamento_a1],
			aula02: dados_linha[comportamento_a2],
			aula03: dados_linha[comportamento_a3],
			aula04: dados_linha[comportamento_a4],
			aula05: dados_linha[comportamento_a5],
			aula06: dados_linha[comportamento_a6],
			aula07: dados_linha[comportamento_a7],
			aula08: dados_linha[comportamento_a8],
			aula09: dados_linha[comportamento_a9],
			aula10: dados_linha[comportamento_a10],
			aula11: dados_linha[comportamento_a11],
			aula12: dados_linha[comportamento_a12],
			aula13: dados_linha[comportamento_a13],
			aula14: dados_linha[comportamento_a14],
			aula15: dados_linha[comportamento_a15],
			aula16: dados_linha[comportamento_a16],
			aula17: dados_linha[comportamento_a17],
		},
		diversao_casa: {
			aula01: dados_linha[dc_aula_01],
			aula02: dados_linha[dc_aula_02],
			aula03: dados_linha[dc_aula_03],
			aula04: dados_linha[dc_aula_04],
			aula05: dados_linha[dc_aula_05],
			aula06: dados_linha[dc_aula_06],
			aula07: dados_linha[dc_aula_07],
			aula08: dados_linha[dc_aula_08],
			aula09: dados_linha[dc_aula_09],
			aula10: dados_linha[dc_aula_10],
			aula11: dados_linha[dc_aula_11],
			aula12: dados_linha[dc_aula_12],
			aula13: dados_linha[dc_aula_13],
			aula14: dados_linha[dc_aula_14],
			aula15: dados_linha[dc_aula_15],
			aula16: dados_linha[dc_aula_16],
			aula17: dados_linha[dc_aula_17],
		},
		horario: {
			aula01: dados_linha[horario_a1],
			aula02: dados_linha[horario_a2],
			aula03: dados_linha[horario_a3],
			aula04: dados_linha[horario_a4],
			aula05: dados_linha[horario_a5],
			aula06: dados_linha[horario_a6],
			aula07: dados_linha[horario_a7],
			aula08: dados_linha[horario_a8],
			aula09: dados_linha[horario_a9],
			aula10: dados_linha[horario_a10],
			aula11: dados_linha[horario_a11],
			aula12: dados_linha[horario_a12],
			aula13: dados_linha[horario_a13],
			aula14: dados_linha[horario_a14],
			aula15: dados_linha[horario_a15],
			aula16: dados_linha[horario_a16],
			aula17: dados_linha[horario_a17],
		},
		organizacao: {
			aula01: dados_linha[organizacao_a1],
			aula02: dados_linha[organizacao_a2],
			aula03: dados_linha[organizacao_a3],
			aula04: dados_linha[organizacao_a4],
			aula05: dados_linha[organizacao_a5],
			aula06: dados_linha[organizacao_a6],
			aula07: dados_linha[organizacao_a7],
			aula08: dados_linha[organizacao_a8],
			aula09: dados_linha[organizacao_a9],
			aula10: dados_linha[organizacao_a10],
			aula11: dados_linha[organizacao_a11],
			aula12: dados_linha[organizacao_a12],
			aula13: dados_linha[organizacao_a13],
			aula14: dados_linha[organizacao_a14],
			aula15: dados_linha[organizacao_a15],
			aula16: dados_linha[organizacao_a16],
			aula17: dados_linha[organizacao_a17],
		},
		extras: {
			aula01: dados_linha[extra_a1],
			aula02: dados_linha[extra_a2],
			aula03: dados_linha[extra_a3],
			aula04: dados_linha[extra_a4],
			aula05: dados_linha[extra_a5],
			aula06: dados_linha[extra_a6],
			aula07: dados_linha[extra_a7],
			aula08: dados_linha[extra_a8],
			aula09: dados_linha[extra_a9],
			aula10: dados_linha[extra_a10],
			aula11: dados_linha[extra_a11],
			aula12: dados_linha[extra_a12],
			aula13: dados_linha[extra_a13],
			aula14: dados_linha[extra_a14],
			aula15: dados_linha[extra_a15],
			aula16: dados_linha[extra_a16],
			aula17: dados_linha[extra_a17],
		}
	}; 
  } 
}
function popularInfoAluno() {
	var div_dados_aluno = document.getElementById("dados_aluno");
	div_dados_aluno.innerHTML = "<h3>"
								.concat(aluno.aluno)
								.concat("</h3>")
								.concat("<p><b>")
								.concat("Responsável: ")
								.concat("</b>")
								.concat(aluno.responsavel)
								.concat("<p>");
}

function popularTabelaFrequencia() {
	var tbl_frequencia = document.getElementById("tbl_frequencia");
	var tbl_header = tbl_frequencia.children[0];
	var header = tbl_header.insertRow(0);
	var header_vazio = header.insertCell(0);
	header_vazio.innerHTML = "";
	for(var i=0; i<aulas.length; i++) {
		var cell_header = header.insertCell();
		cell_header.innerHTML = "<b>Aula ".concat(i+1).concat("</b>");
	}
	var tbl_body = tbl_frequencia.children[1];
	
	/*inserindo informações de frequência*/
	var linha_frequencia = tbl_body.insertRow();
	var cell_frequencia = linha_frequencia.insertCell(0);
	cell_frequencia.innerHTML = "<b>Frequência</b>";
	for(var i=0; i<aulas.length; i++) {
		var cell_value = linha_frequencia.insertCell();
		if(aluno.frequencia[aulas[i]] == "p") {
			cell_value.style = "background-color: #c8e6c9;";//verde
		} else if(aluno.frequencia[aulas[i]] == "f") {
			cell_value.style = "background-color: #ffcdd2;";//vermelho
		} else if(aluno.frequencia[aulas[i]] == "r") {
			cell_value.style = "background-color: #f0f4c3;";//amarelo
		}
		cell_value.innerHTML = aluno.frequencia[aulas[i]];
	}
	
	/*inserindo informações de comportamento*/
	var linha_comportamento = tbl_body.insertRow();
	var cell_comportamento = linha_comportamento.insertCell(0);
	cell_comportamento.innerHTML = "<b>Comportamento</b>";
	for(var i=0; i<aulas.length; i++) {
		var cell_value = linha_comportamento.insertCell();
		cell_value.style = getCorCell(comportamento[aulas[i]],200,100);
		cell_value.innerHTML = aluno.comportamento[aulas[i]];
	}
	
	/*inserindo informações de diversão de casa*/
	var linha_divecasa = tbl_body.insertRow();
	var cell_divecasa = linha_divecasa.insertCell(0);
	cell_divecasa.innerHTML = "<b>Diversão de casa</b>";
	for(var i=0; i<aulas.length; i++) {
		var cell_value = linha_divecasa.insertCell();
		cell_value.style = getCorCell(diversao_casa[aulas[i]],200,100);
		cell_value.innerHTML = aluno.diversao_casa[aulas[i]];
	}
	
	/*inserindo informações de organização*/
	var linha_organizacao = tbl_body.insertRow();
	var cell_organizacao = linha_organizacao.insertCell(0);
	cell_organizacao.innerHTML = "<b>Organização</b>";
	for(var i=0; i<aulas.length; i++) {
		var cell_value = linha_organizacao.insertCell();
		cell_value.style = getCorCell(organizacao[aulas[i]],100,50);
		cell_value.innerHTML = aluno.organizacao[aulas[i]];
	}
	
	/*inserindo informações de chegada no horário*/
	var linha_horario = tbl_body.insertRow();
	var cell_horario = linha_horario.insertCell(0);
	cell_horario.innerHTML = "<b>Chegou no horário</b>";
	for(var i=0; i<aulas.length; i++) {
		var cell_value = linha_horario.insertCell();
		cell_value.style = getCorCell(horario[aulas[i]],100,50);
		cell_value.innerHTML = aluno.horario[aulas[i]];
	}
	
	/*inserindo informações extras*/
	var linha_extras = tbl_body.insertRow();
	var cell_extras = linha_extras.insertCell(0);
	cell_extras.innerHTML = "<b>Extras</b>";
	for(var i=0; i<aulas.length; i++) {
		var cell_value = linha_extras.insertCell();
		cell_value.style = getCorCell(extras[aulas[i]],100,50);
		cell_value.innerHTML = aluno.extras[aulas[i]];
	}
}

function getCorCell(pontos, max, mid) {
	var background_color = "background-color: #c8e6c9;";
	if(pontos > mid && pontos < max) {
		background_color = "background-color: #f0f4c3;";
	} else if(pontos < mid) {
		background_color = "background-color: #ffcdd2;";
	}
}

function popularTabelaDadosAcesso() {
	var tbl_frequencia = document.getElementById("tbl_dados_acesso");
	var tbl_header = tbl_frequencia.children[0];
	var header = tbl_header.insertRow(0);
	var header_vazio = header.insertCell();
	header_vazio.innerHTML = "";
	var header_login = header.insertCell();
	header_login.innerHTML = "<b>Usuário</b>";
	var header_senha = header.insertCell();
	header_senha.innerHTML = "<b>Senha</b>";
	
	var tbl_body = tbl_frequencia.children[1];
	
	/*inserindo informações do classcraft*/
	var linha_classcraft = tbl_body.insertRow();
	var cell_classcraft = linha_classcraft.insertCell(0);
	cell_classcraft.innerHTML = "<b>Classcraft</b>";
	var cell_classcraft_login = linha_classcraft.insertCell();
	cell_classcraft_login.innerHTML = aluno.login_classcraft;
	var cell_classcraft_senha = linha_classcraft.insertCell();
	cell_classcraft_senha.innerHTML = aluno.senha_classcraft;
	
	/*inserindo informações do portal*/
	var linha_portal = tbl_body.insertRow();
	var cell_portal = linha_portal.insertCell(0);
	cell_portal.innerHTML = "<b>Portal</b>";
	var cell_portal_login = linha_portal.insertCell();
	cell_portal_login.innerHTML = aluno.login_portal;
	var cell_portal_senha = linha_portal.insertCell();
	cell_portal_senha.innerHTML = aluno.senha_portal;
	
	/*inserindo informações do email*/
	var linha_email = tbl_body.insertRow();
	var cell_email = linha_email.insertCell(0);
	cell_email.innerHTML = "<b>E-mail</b>";
	var cell_email_login = linha_email.insertCell();
	cell_email_login.innerHTML = aluno.login_email;
	var cell_email_senha = linha_email.insertCell();
	cell_email_senha.innerHTML = aluno.senha_email;
}
  
function successFunction(data) {
  var allRows = data.split(/\r?\n|\r/);
  var table = '<table>';
  for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
    if (singleRow === 0) {
      table += '<thead>';
      table += '<tr>';
    } else {
      table += '<tr>';
    }
    var rowCells = allRows[singleRow].split(',');
    for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
      if (singleRow === 0) {
        table += '<th>';
        table += rowCells[rowCell];
        table += '</th>';
      } else {
        table += '<td>';
        table += rowCells[rowCell];
        table += '</td>';
      }
    }
    if (singleRow === 0) {
      table += '</tr>';
      table += '</thead>';
      table += '<tbody>';
    } else {
      table += '</tr>';
    }
  } 
  table += '</tbody>';
  table += '</table>';
  $('body').append(table);
}