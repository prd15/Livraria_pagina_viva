# Catálogo da Livraria Página Viva

Página de cadastro/exibição de um livro no catálogo online da livraria fictícia
**Página Viva**, construída com HTML, CSS e JavaScript puros (sem frameworks e
sem build). Atividade prática da disciplina de Desenvolvimento Web.

O livro do catálogo é o *Livro do Desassossego*, de Fernando Pessoa. Está em
domínio público, já que o autor morreu em 1935.

## Como executar

Não há dependências nem etapa de compilação. Basta clonar o repositório e abrir
o `index.html` em qualquer navegador:

```bash
git clone <url-do-repositorio>
cd livraria-pagina-viva
```

Depois é só abrir o arquivo `index.html` com duplo clique ou arrastá-lo para a
janela do navegador. Testado no Firefox e no Chrome.

## Estrutura do projeto

```
projeto/
├── index.html          estrutura semântica, formulário e link interno
├── README.md           este arquivo
├── css/
│   └── estilo.css      seletores, cascata, Flexbox, Grid e media query
├── imagens/
│   └── capa-livro.png  capa do livro
└── js/
    └── script.js       carrinho e contador via manipulação de DOM
```

Todos os caminhos no `index.html` são relativos à pasta do projeto:
`css/estilo.css`, `imagens/capa-livro.png` e `js/script.js`.

---

## Respostas

### 1. Qual é o papel de um servidor Web ao carregar esta página?

Quem entrega os arquivos é o servidor Web. Ele fica ligado esperando pedido. O
navegador manda uma requisição HTTP, do tipo `GET /index.html`, e o servidor
responde com o arquivo e um código: 200 se achou, 404 se não achou.

Vale notar que isso não acontece uma vez só. Nesta página são quatro idas e
voltas: primeiro o HTML, e só depois de lê-lo o navegador descobre que ainda
precisa do `css/estilo.css`, da `imagens/capa-livro.png` e do `js/script.js`.
Cada um vira uma requisição nova.

O servidor também não executa nada do código desta página. O JavaScript do
carrinho roda no navegador de quem visita. O servidor entrega os arquivos e sai
de cena.

### 2. Caminho relativo a partir de `paginas/sobre.html` (pergunta da Etapa 7)

Dentro de `paginas/sobre.html` o caminho correto seria:

```html
<img src="../imagens/capa-livro.png" alt="Capa do Livro do Desassossego">
```

O caminho relativo parte sempre da pasta onde está o arquivo que o contém, e não
da raiz do projeto. Como `sobre.html` fica dentro de `paginas/`, escrever
`imagens/capa-livro.png` faria o navegador procurar em `paginas/imagens/`. Essa
pasta não existe, então a imagem quebraria.

O `../` manda subir um nível. Sai de `paginas/`, volta para a raiz, e de lá
`imagens/capa-livro.png` acha o arquivo. No `index.html` esse `../` não aparece
porque ele já está na raiz: não há nível nenhum para subir.

### 3. Boas práticas de escrita HTML aplicadas na Etapa 1

O documento usa tag semântica sempre que existe uma para o caso. `header`,
`nav`, `main`, `article`, `section` e `footer` no lugar de `div`. A diferença
aparece em leitor de tela, que consegue pular direto para o conteúdo principal
justamente porque o `main` declara ser o conteúdo principal. Uma
`div class="conteudo"` não diz isso para ninguém. Sobraram duas `div` no
arquivo, as duas apenas segurando layout de Flexbox e Grid, e o comentário do
fim do `index.html` explica esse caso.

As tags estão todas fechadas e aninhadas na ordem certa. Quando isso é feito
errado, o navegador conserta sozinho, só que cada navegador conserta de um
jeito, e aí o CSS funciona no Firefox e não funciona no Chrome sem motivo
aparente.

Nenhum `id` se repete: cada um aparece uma vez só. Se houvesse repetição, o
`getElementById` devolveria sempre o primeiro, e achar a causa de o script mexer
no elemento errado levaria um bom tempo.

A indentação usa quatro espaços por nível. Parece detalhe bobo, mas é o que faz
enxergar tag aberta esquecida antes de a página quebrar.

O `alt` da capa descreve a imagem de verdade, em vez de dizer só "capa". Serve
para quem usa leitor de tela e para quando a imagem não carrega.

Todo campo do formulário tem `label` com `for` apontando para o `id`. Fora a
acessibilidade, isso permite clicar no texto para focar o campo.

E a escolha entre `ul` e `table` seguiu o sentido, não a aparência. Os destaques
poderiam estar em qualquer ordem que continuariam fazendo sentido, daí `ul`. Os
formatos têm linha e coluna de verdade, formato contra preço contra prazo, daí
`table`.

---

## O que cada etapa entregou

| Etapa | Onde conferir |
|---|---|
| 1 – HTML semântico | `index.html` inteiro; justificativas no comentário final |
| 2 – Seletores e cascata | `css/estilo.css`: blocos marcados "ETAPA 2" e o experimento de especificidade |
| 3 – Flexbox e Grid | `css/estilo.css`: `#cabecalho` e `.lista-menu` (flex), `.cartao` (flex, com justificativa), `.grade-formatos` (grid) |
| 4 – Responsividade | `meta viewport` no `index.html`; media query de 600px no fim do CSS; `rem`, `em` e `%` ao longo do arquivo |
| 5 – JavaScript/DOM | `js/script.js` |
| 6 – Formulário | `<section id="contato">` no `index.html` |
| 7 – Pastas e caminhos | estrutura acima e respostas 1–3 |
