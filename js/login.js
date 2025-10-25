 /**
 * Classe responsável por gerenciar a alternância da visibilidade
 * de um campo de senha (input type='password').
 */
class PasswordToggleManager {
    /**
     * O construtor recebe o ID do campo de input que será gerenciado.
     * @param {string} inputId O ID (identificador) do elemento input no DOM.
     */
    constructor(inputId) {
        // Armazena a referência para o elemento input para uso nos métodos.
        this.inputElement = document.getElementById(inputId);

        // Verifica se o elemento foi encontrado.
        if (!this.inputElement) {
            console.error(`Elemento com ID '${inputId}' não encontrado.`);
            return; // Interrompe se o elemento não existir.
        }
    }

    /**
     * Alterna o atributo 'type' do input entre 'password' e 'text'.
     */
    toggleVisibility() {
        // Acessa o elemento armazenado e altera seu tipo.
        this.inputElement.type = this.inputElement.type === 'password' ? 'text' : 'password';
    }

    /**
     * [OPCIONAL] Adiciona um ouvinte de evento (listener) a um botão
     * para chamar o método toggleVisibility.
     * @param {string} buttonId O ID do botão que irá acionar o toggle.
     */
    setupToggleButton(buttonId) {
        const button = document.getElementById(buttonId);
        if (button) {
            // Usa 'bind(this)' para garantir que 'this' dentro de toggleVisibility
            // ainda se refira à instância de PasswordToggleManager.
            button.addEventListener('click', this.toggleVisibility.bind(this));
        } else {
            console.warn(`Botão com ID '${buttonId}' não encontrado.`);
        }
    }
}

// --- Exemplo de Uso ---

// 1. Instancie um objeto para gerenciar o campo de senha (assumindo id="password-field").
const passwordInputManager = new PasswordToggleManager('password-field');

// 2. [OPCIONAL] Se houver um botão de "mostrar/esconder senha" (assumindo id="toggle-button").
// Comente esta linha se você chamar 'passwordInputManager.toggleVisibility()' de outra forma.
passwordInputManager.setupToggleButton('toggle-button');
