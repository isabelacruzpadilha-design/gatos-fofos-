// Selecionando os elementos do DOM
const btnAlerta = document.getElementById('btn-alerta');
const contadorElemento = document.getElementById('contador');
const btnTema = document.getElementById('theme-toggle');

let cliques = 0;

// 1. Função para contar cliques e exibir um alerta interativo
btnAlerta.addEventListener('click', () => {
    cliques++;
    contadorElemento.textContent = cliques;
    
    // Um efeito simples ao atingir uma meta de cliques
    if (cliques === 5) {
        alert("Olha só! Você já clicou 5 vezes! O JavaScript está funcionando.");
    }
});

// 2. Função para alternar o Modo Escuro (Dark Mode)
btnTema.addEventListener('click', () => {
    // Adiciona ou remove a classe 'dark-mode' do elemento <body>
    document.body.classList.toggle('dark-mode');
    
    // Altera o texto do botão dependendo do tema atual
    if (document.body.classList.contains('dark-mode')) {
        btnTema.textContent = "Modo Claro";
    } else {
        btnTema.textContent = "Modo Escuro";
    }
});
