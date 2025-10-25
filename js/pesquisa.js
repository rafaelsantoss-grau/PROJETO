/**
 * Classe responsável por gerenciar a abertura, fechamento e o comportamento
 * de um modal genérico na página.
 */
class ModalManager {
    /**
     * O construtor recebe os IDs dos três elementos cruciais.
     * @param {string} modalId O ID do elemento principal do modal (a div que esconde/mostra).
     * @param {string} openButtonId O ID do botão que aciona a abertura do modal.
     * @param {string} closeButtonId O ID do botão que aciona o fechamento do modal.
     */
    constructor(modalId, openButtonId, closeButtonId) {
        // 1. Armazena as referências dos elementos DOM.
        this.modal = document.getElementById(modalId);
        this.openModalBtn = document.getElementById(openButtonId);
        this.closeModalBtn = document.getElementById(closeButtonId);

        // 2. Vincula os manipuladores de eventos (listeners) aos elementos.
        this.setupListeners();
    }

    /**
     * Define todos os ouvintes de evento (listeners) para o modal.
     */
    setupListeners() {
        // Verifica se os elementos cruciais existem.
        if (!this.modal || !this.openModalBtn || !this.closeModalBtn) {
            console.error("Um ou mais elementos do modal não foram encontrados. Verifique os IDs.");
            return;
        }

        // Usa 'bind(this)' para garantir que 'this' dentro dos métodos
        // referencie corretamente a instância da classe ModalManager.
        this.openModalBtn.addEventListener('click', this.open.bind(this));
        this.closeModalBtn.addEventListener('click', this.close.bind(this));
        window.addEventListener('click', this.closeIfOutside.bind(this));
    }

    /**
     * Abre o modal, alterando seu estilo para "flex" (ou "block", dependendo do CSS).
     */
    open() {
        this.modal.style.display = "flex";
    }

    /**
     * Fecha o modal, alterando seu estilo para "none".
     */
    close() {
        this.modal.style.display = "none";
    }

    /**
     * Fecha o modal se o clique ocorrer fora dele (no overlay/background).
     * @param {Event} event O objeto de evento do clique na janela.
     */
    closeIfOutside(event) {
        if (event.target === this.modal) {
            this.close();
        }
    }
}

// --- Exemplo de Uso (Instanciação) ---

// A única linha de código necessária para iniciar o gerenciamento:
const searchModalManager = new ModalManager(
    "searchModal",
    "openModalBtn",
    "closeModalBtn"
);

// Agora, o objeto 'searchModalManager' é responsável por todo o comportamento do modal.