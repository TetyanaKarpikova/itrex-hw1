const Handler = (router, routes) => (event) => {
    const changeUrl = (event) => {
        event.preventDefault();
        history.pushState({}, null, `/#${event.target.dataset.name}`);
        router(routes);
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
    } else {
        changeUrl(event);
    }  
}

export default Handler;