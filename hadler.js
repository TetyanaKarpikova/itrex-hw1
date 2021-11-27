import checkSignIn from './checkData/checkSignIn.js';
import checkSignUp from './checkData/checkSignUp.js';

const Handler = (router, routes) => (event) => {
    const changeUrl = (event) => {
        event.preventDefault();
        history.pushState({}, null, `/#${event.target.dataset.name}`);
        router(routes);
    }

    const changeSignIn = (event) => {
        event.preventDefault();
        if (checkSignIn()) {
            history.pushState({}, null, `/#${event.target.dataset.name}`);
            router(routes);
        }
    }

    
    const changeSignUp = (event) => {
        event.preventDefault();  
        if (checkSignUp()) {
            history.pushState({}, null, `/#${event.target.dataset.name}`);
            router(routes);
        }
    }

    const togglePassword = (event) => {

        event.target.previousElementSibling.type === 'password'
            ? event.target.previousElementSibling.type = 'text'
            : event.target.previousElementSibling.type = 'password';

        if (event.target.classList.contains("wrapper-input__show-pass_icon-eye")) {
            event.target.classList.remove("wrapper-input__show-pass_icon-eye")
            event.target.classList.add("wrapper-input__show-pass_icon-close")
        } else {
            event.target.classList.remove("wrapper-input__show-pass_icon-close");
            event.target.classList.add("wrapper-input__show-pass_icon-eye");
        }

        if (event.target.classList.contains("wrapper-input__show-confirm_icon-eye")) {
            event.target.classList.remove("wrapper-input__show-confirm_icon-eye")
            event.target.classList.add("wrapper-input__show-confirm_icon-close")
        } else {
            event.target.classList.remove("wrapper-input__show-confirm_icon-close");
            event.target.classList.add("wrapper-input__show-confirm_icon-eye");
        }
    }
  
    if (event.target.classList.contains('wrapper-input__show-pass') ||
        event.target.classList.contains('wrapper-input__show-confirm')) {
        togglePassword(event);
    }

    if (event.target.classList.contains('wrapper-send-form__button_login')) {
        changeSignIn(event);
    }

    if (event.target.classList.contains('wrapper-send-form__button_register') ) {        
        changeSignUp(event);
    }

    if (event.target.nodeName === 'A') {        
        changeUrl(event);
    }


}
export default Handler;