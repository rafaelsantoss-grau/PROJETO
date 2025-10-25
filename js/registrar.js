/**
 * CLASSE 1: Gerencia a alternância de visibilidade do campo de senha.
 * (Esta é a versão POO da sua função 'togglePassword')
 */
class PasswordToggler {
    constructor(inputId) {
        this.inputElement = document.getElementById(inputId);

        if (!this.inputElement) {
            console.error(`Campo de senha com ID '${inputId}' não encontrado.`);
        }
    }

    // Método que executa a alternância.
    toggle() {
        if (this.inputElement) {
            this.inputElement.type = this.inputElement.type === 'password' ? 'text' : 'password';
        }
    }

    // Método opcional para vincular a um botão de "olho".
    setupToggleButton(buttonId) {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', this.toggle.bind(this));
        }
    }
}

// -------------------------------------------------------------------

/**
 * CLASSE 2: Gerencia a validação de confirmação de senha de um formulário.
 */
class RegistrationFormValidator {
    /**
     * @param {string} formId O ID do formulário principal.
     * @param {string} passwordId O ID do campo de senha.
     * @param {string} confirmPasswordId O ID do campo de confirmação de senha.
     * @param {string} errorMsgId O ID do elemento para exibir a mensagem de erro.
     */
    constructor(formId, passwordId, confirmPasswordId, errorMsgId) {
        // Armazena as referências dos elementos
        this.form = document.getElementById(formId);
        this.passwordInput = document.getElementById(passwordId);
        this.confirmPasswordInput = document.getElementById(confirmPasswordId);
        this.errorMessage = document.getElementById(errorMsgId);

        // Verifica a existência dos elementos e configura os listeners
        if (this.form && this.passwordInput && this.confirmPasswordInput && this.errorMessage) {
            this.setupListeners();
        } else {
            console.error("Um ou mais elementos do formulário de registro não foram encontrados.");
        }
    }

    /**
     * Verifica se as senhas são iguais e mostra/esconde a mensagem de erro.
     * @returns {boolean} true se as senhas coincidirem, false caso contrário.
     */
    validate() {
        const passwordsMatch = this.passwordInput.value === this.confirmPasswordInput.value;

        if (!passwordsMatch) {
            this.errorMessage.style.display = 'block';
        } else {
            this.errorMessage.style.display = 'none';
        }

        return passwordsMatch;
    }

    /**
     * Configura os event listeners para o formulário e o campo de confirmação.
     */
    setupListeners() {
        // 1. Previne o envio do formulário se a validação falhar.
        this.form.addEventListener('submit', (e) => {
            // Garante que 'this' se refere à instância da classe
            if (!this.validate()) {
                e.preventDefault();
            }
        });

        // 2. Valida em tempo real enquanto o usuário digita no campo de confirmação.
        // O método 'validate' é chamado sempre que o conteúdo do campo muda.
        this.confirmPasswordInput.addEventListener('input', this.validate.bind(this));
    }
}

// --- Exemplo de Uso (Instanciação) ---

// 1. Inicializa o gerenciador de alternância de senha (Se houver um botão com id="toggle-reg-password")
const regPasswordToggler = new PasswordToggler('password');
regPasswordToggler.setupToggleButton('toggle-reg-password');

// 2. Inicializa o validador de formulário
const validator = new RegistrationFormValidator(
    'cadastroForm',          // ID do formulário
    'password',              // ID do campo de senha
    'confirmPassword',       // ID do campo de confirmação
    'error'                  // ID da mensagem de erro
);