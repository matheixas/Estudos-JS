function createCalculator() {
    return {
        display: document.querySelector('.display'),

        start() {
            this.clickButtons();
            this.pressEnter();
            this.pressBackSpace();
        },

        pressBackSpace() {
            this.display.addEventListener('keydown', e => {
                if (e.keyCode === 8) {
                    e.preventDefault();
                    this.clearDisplay();
                }
            })
        },

        pressEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.equals();
                }
            });
        },

        equals() {
            let calculation = this.display.value;

            try {
                calculation = eval(calculation);

                if (!calculation) {
                    alert("Conta inválida");
                    return;
                }

                this.display.value = String(calculation);
            } catch (e) {
                alert("Conta inválida");
                return;
            }
        },

        clearDisplay() {
            this.display.value = "";
        },

        deleteLast() {
            this.display.value = this.display.value.slice(0, -1);
        },

        clickButtons() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnForDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.deleteLast();
                }

                if (el.classList.contains('btn-eq')) {
                    this.equals();
                }

                this.display.focus();
            });
        },

        btnForDisplay(value) {
            this.display.value += value;
        }
    };
}

const calculator = createCalculator();
calculator.start();