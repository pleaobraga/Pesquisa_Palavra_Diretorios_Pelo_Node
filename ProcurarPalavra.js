//Informações de outros arquivos
const fs = require("fs");
var Informacao = require("./InformacaoProcurarPalavra");
var Pesquisa = require("./PesquisaComRegex");
  
const Buscas = new Pesquisa();
 
Buscas.LeituraArquivosNoDiretorio(Informacao.DiretorioInicial,Informacao.PalavraBuscada)
        .then(ImprimeResultado)
        .catch(console.log);


function ImprimeResultado(ObjetoEncontrado)
{   
    console.log(`Número de pastas abertas:${ObjetoEncontrado.ListaPastas.length}`);
    ObjetoEncontrado.ArquivosComPalavra.forEach((Arquivo)=>console.log(Arquivo));
}
