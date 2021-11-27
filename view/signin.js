const SignIn = {
    render: () => {
        return `
        <main class="main-wrapper">
        <div class="image-background">
            
        </div>

        <form class="form-signup form-signup_login" id="form" submit="sendForm()">
            <h2 class="name-page">Sign In</h2>
            <div class="wrapper-input wrapper-input_signin">
                <input class="wrapper-input__data wrapper-input__data_email" type="email" name="email"
                    placeholder="Email">
            </div>
            <div class="wrapper-input wrapper-input_signin">
                <input class="wrapper-input__data wrapper-input__data_password" type="password" name="password"
                    placeholder="Password">
                <button 
                    class="wrapper-input__show-pass wrapper-input__show-pass_open wrapper-input__show-pass_icon-eye"
                    type="button">
                </button>
            </div>
            <div class="wrapper-send-form">
                <button class="wrapper-send-form__button wrapper-send-form__button_login" type="submit" data-name="/dashboard">Sign In ></button>
            </div>
        </form>
        <div class="wrapper-link">
            <span> Don't have an account?</span>
            <a href="#" data-name="/">Sign up</a>
        </div>
    </main>
        `
    }
}

export default SignIn;
