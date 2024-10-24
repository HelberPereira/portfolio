// Função para exibir a seção correspondente ao link clicado
function exibirSecao(secaoId) {
    // Oculta todas as seções
    var secoes = document.querySelectorAll('section');
    secoes.forEach(function(secao) {
        secao.classList.add('ocultar');
    });

    // Exibe a seção selecionada
    var secaoSelecionada = document.getElementById(secaoId);
    if (secaoSelecionada) {
        secaoSelecionada.classList.remove('ocultar');
    }

    // Atualiza o texto no topo da página
    const text = document.getElementById('escolha');
    if (secaoId === 'sobre') {
        text.innerText = 'SOBRE MIM';
    } else if (secaoId === 'formacao') {
        text.innerText = 'FORMAÇÃO EDUCACIONAL';
    } else if (secaoId === 'portfolio') {
        text.innerText = 'PORTFÓLIO';
    } else if (secaoId === 'contato') {
        text.innerText = 'CONTATO';
    }

    // Remove a classe 'ativo' de todos os itens do menu
    var menuItens = document.querySelectorAll('.sidebar nav ul li');
    menuItens.forEach(function(item) {
        item.classList.remove('ativo');
    });

    // Adiciona a classe 'ativo' ao item do menu correspondente
    var menuItemAtivo = document.querySelector('.sidebar nav ul li[onclick="exibirSecao(\'' + secaoId + '\')"]');
    if (menuItemAtivo) {
        menuItemAtivo.classList.add('ativo');
    }
}

// Função para lidar com o envio do formulário
function enviarFormulario(event) {
    event.preventDefault(); // Evita o envio real do formulário
    exibirSecao('mensagem-enviada'); // Exibe a nova seção
}

// Adicione um event listener para o formulário
var formulario = document.querySelector('form');
formulario.addEventListener('submit', enviarFormulario);
