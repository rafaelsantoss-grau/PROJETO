/**
 * CLASSE 1: MenuManager
 * Gerencia o comportamento de um menu ou modal (abrir, fechar e fechar ao clicar fora).
 */
class MenuManager {
    /**
     * @param {string} menuId O ID do elemento principal do menu (o que é mostrado/escondido).
     */
    constructor(menuId) {
        // Armazena a referência do elemento DOM
        this.menuElement = document.getElementById(menuId);

        if (!this.menuElement) {
            console.error(`Elemento de menu com ID '${menuId}' não encontrado.`);
            return;
        }

        // Configura o listener para fechar o menu ao clicar fora
        this.setupOutsideClickListener();
    }

    /**
     * Abre o menu, configurando seu estilo para "flex".
     */
    open() {
        this.menuElement.style.display = "flex";
    }

    /**
     * Fecha o menu, configurando seu estilo para "none".
     */
    close() {
        this.menuElement.style.display = "none";
    }

    /**
     * Configura o listener na janela para fechar o menu se o clique for no background.
     */
    setupOutsideClickListener() {
        // Usa uma arrow function para manter 'this' referenciando a instância da classe
        window.addEventListener('click', (event) => {
            if (event.target === this.menuElement) {
                this.close();
            }
        });
    }
}

// -------------------------------------------------------------------

/**
 * CLASSE 2: OptionSelector
 * Gerencia a lógica de seleção visual (adicionar/remover a classe 'selected')
 * em um grupo de elementos.
 */
class OptionSelector {
    /**
     * @param {string} selectorString Uma string de seletores CSS para os elementos de opção,
     * ex: '.option, .option1'.
     */
    constructor(selectorString) {
        this.selector = selectorString;

        // Configura os listeners em todos os elementos correspondentes
        this.setupSelectionListeners();
    }

    /**
     * Adiciona o listener de clique a todos os elementos encontrados.
     */
    setupSelectionListeners() {
        document.querySelectorAll(this.selector).forEach(element => {
            // Vincula o método 'select' ao clique, garantindo que 'this' se refere à instância da classe.
            element.addEventListener('click', this.select.bind(this, element));
        });
    }

    /**
     * Remove a seleção de todos os elementos e seleciona o elemento clicado.
     * @param {HTMLElement} element O elemento DOM que foi clicado.
     */
    select(element) {
        // Remove a classe 'selected' de todos os elementos.
        document.querySelectorAll(this.selector).forEach(opt => opt.classList.remove('selected'));

        // Adiciona a classe 'selected' apenas ao elemento clicado.
        element.classList.add('selected');
    }
}

// --- Exemplo de Uso (Instanciação) ---

// 1. Inicializa o gerenciador do menu principal
const principalMenu = new MenuManager('menu-princi');

// Se você precisar de funções globais (para vincular a um botão onclick direto no HTML):
window.openMenu = () => principalMenu.open();
window.closeMenu = () => principalMenu.close();


// 2. Inicializa o seletor de idiomas/opções (usando seus seletores originais)
// Agora, basta clicar em qualquer elemento com a classe 'option' ou 'option1'.
const languageSelector = new OptionSelector('.option, .option1');