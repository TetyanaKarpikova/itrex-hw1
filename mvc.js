class Model {
    constructor() {
        this.data = JSON.parse(localStorage.getItem("signUp")) || [];
    }

    setData(user) {
        localStorage.setItem("signUp", JSON.stringify(user));
    }

    addData(email, password, firstName, lastName) {
        const newUser = {
            email,
            password,
            firstName,
            lastName
        }
        this.data.push(newUser);
        this.setData(this.data);
    }
}


class VIew {
    constructor() {
        this.form = this.getElement(".form-signup");
        this.email = this.getElement(".wrapper-input__data_email");
        this.password = this.getElement(".wrapper-input__data_password");
        this.confirmPassword = this.getElement(".wrapper-input__data_confirm");
        this.showPassword = this.getElement(".wrapper-input__show-pass");
        this.showConfirmPassword = this.getElement(".wrapper-input__show-confirm");
        this.firstName = this.getElement(".wrapper-input__data_firstName");
        this.lastName = this.getElement(".wrapper-input__data_lastName");

        this.localListenerPassword();
        this.localListenerConfirm();
    }

    getElement(selector) {
        return document.querySelector(selector);
    }

    localListenerPassword() {
        this.showPassword.addEventListener('click', (event) => {
            event.preventDefault();

            this.password.getAttribute('type') === 'password'
                ? this.password.setAttribute('type', 'text')
                : this.password.setAttribute('type', 'password');

            if (event.target.classList.contains("wrapper-input__show-pass_icon-eye")) {
                event.target.classList.remove("wrapper-input__show-pass_icon-eye")
                event.target.classList.add("wrapper-input__show-pass_icon-close")
            } else {
                event.target.classList.remove("wrapper-input__show-pass_icon-close");
                event.target.classList.add("wrapper-input__show-pass_icon-eye");
            }
        })
    }

    localListenerConfirm() {
        if (this.confirmPassword) {
            this.showConfirmPassword.addEventListener('click', (event) => {
                event.preventDefault();

                this.confirmPassword.getAttribute('type') === 'password'
                    ? this.confirmPassword.setAttribute('type', 'text')
                    : this.confirmPassword.setAttribute('type', 'password');

                if (event.target.classList.contains("wrapper-input__show-confirm_icon-eye")) {
                    event.target.classList.remove("wrapper-input__show-confirm_icon-eye")
                    event.target.classList.add("wrapper-input__show-confirm_icon-close")
                } else {
                    event.target.classList.remove("wrapper-input__show-confirm_icon-close");
                    event.target.classList.add("wrapper-input__show-confirm_icon-eye");
                }
            })
        }
    }

    clearInput(form) {
        for (let i = 0; i < form.length; i++) {
            form[i].value = '';
        }
    }
    addCheckData(handler) {
        let name = '';
        let password = '';

        this.form.addEventListener('submit', (event) => {
            event.preventDefault();

            if (this.form.classList.contains('form-signup__register')) {
                if (this.email.value && this.password.value && this.firstName.value) {
                    handler(this.email.value, this.password.value, this.firstName.value, this.lastName.value);
                    window.open('signIn.html', '_self');
                }
            }

            if (this.form.classList.contains('form-signup_login')) {

                if (this.email.value && this.password.value) {
                    outer: for (let i = 0; i < handler.length; i++) {
                        name = handler[i].email === this.email.value ? this.email.value : '';
                        password = handler[i].password === this.password.value ? this.password.value : '';
                        if (name && password) {
                            break outer;
                        }
                    }
                    if (name && password) {
                        window.open('dashboard.html', '_self');
                    }
                }
            }
            this.clearInput(form);
        })
    }
}


class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.addCheckData(this.handlerAddNewData);
        this.handlerDisplayUser(this.model.data);
    }

    handlerAddNewData = (email, password, firstName, lastName) => {
        this.model.addData(email, password, firstName, lastName);
    }

    handlerDisplayUser = (user) => {
        this.view.addCheckData(user);
    }
}

const app = new Controller(new Model(), new VIew());
