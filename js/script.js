/* ==========================================================================
   Livraria Página Viva - Etapa 5: seleção e manipulação de DOM
   ==========================================================================

   PAPEL DO JAVASCRIPT NESTE FLUXO (comentário obrigatório):
   Este código roda no navegador de quem abre a página, e não no servidor. Ele
   fica escutando um evento, que aqui é o clique no botão "Adicionar ao
   carrinho", e quando o clique acontece ele monta um <li> novo e coloca na
   lista. A página não recarrega em momento nenhum: o HTML já tinha entregado a
   estrutura e o CSS já tinha cuidado da aparência, e o que o JavaScript faz é
   mexer nisso depois que tudo está na tela.
   ========================================================================== */


/* Etapa 5.2 - seleção pelo id.
   getElementById recebe só o nome do id, sem ponto e sem cerquilha. Quem
   aceita seletor CSS é o querySelector. E document.className(...) não existe:
   className é propriedade de elemento, não método de document. */
var botao = document.getElementById("btn-adicionar");
var carrinho = document.getElementById("carrinho");
var contador = document.getElementById("contador");
var tituloDoLivro = document.getElementById("titulo-livro").textContent;

/* Guarda quantos itens já foram adicionados. */
var quantidade = 0;


/* Função chamada a cada clique no botão. */
function adicionarAoCarrinho() {

    /* Passo 1 - cria o <li> na memória, ainda fora da página. */
    var novoItem = document.createElement("li");

    /* Passo 2 - define o texto que aparece.
       O textContent insere texto puro. Se viesse alguma marcação aqui, ela
       seria escrita como texto mesmo, sem virar HTML. */
    novoItem.textContent = "1x " + tituloDoLivro;

    /* Passo 3 - pendura o <li> como último filho da <ul id="carrinho">.
       É só aqui que o item aparece na tela. */
    carrinho.appendChild(novoItem);

    /* Etapa 5.5 - atualiza o contador do cabeçalho, também com textContent. */
    quantidade = quantidade + 1;
    contador.textContent = quantidade;
}


/* Etapa 5.3 - registro do evento.
   Aqui vai a REFERÊNCIA da função, sem os parênteses. Com
   adicionarAoCarrinho() a função rodaria na hora e o que ficaria registrado
   como ouvinte seria o retorno dela, que é undefined. O clique não faria nada. */
botao.addEventListener("click", adicionarAoCarrinho);


/* --------------------------------------------------------------------------
   Formulário de contato (Etapa 6)
   A atividade não pede envio real ao servidor. Sem segurar o envio, o clique
   em "Enviar" manda o formulário e o servidor responde com erro (405 quando
   não aceita POST), além de a senha ir parar na URL se o método for GET.
   O preventDefault cancela esse envio e apenas escreve a confirmação na tela,
   no mesmo esquema da Etapa 5: referência da função, sem parênteses.
   -------------------------------------------------------------------------- */
var formulario = document.getElementById("form-contato");
var aviso = document.getElementById("aviso-envio");

function enviarContato(evento) {
    evento.preventDefault();
    aviso.textContent = "Obrigado! Recebemos sua mensagem e respondemos em até um dia útil.";
}

formulario.addEventListener("submit", enviarContato);
