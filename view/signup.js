const SignUp = {
    render: () => {
        return `
        <main class="main-wrapper">
        <div class="image-background">
           
        </div>

        <form class="form-signup form-signup__register " id="form" submit="sendForm()">
            <h2 class="name-page">Sign Up</h2>
            <div class="wrapper-input">
                <input class="wrapper-input__data wrapper-input__data_firstName" type="text" name="firstName" placeholder="First Name">
            </div>
            <div class="wrapper-input">
                <input class="wrapper-input__data wrapper-input__data_lastName" type="text" name="lastName" placeholder="Last Name">
            </div>
            <div class="wrapper-input">
                <input class="wrapper-input__data wrapper-input__data_email" type="email" name="email"
                    placeholder="Email">
            </div>
            <div class="wrapper-input">
                <input class="wrapper-input__data wrapper-input__data_password" type="password" name="password"
                    placeholder="Password">
                <button class="wrapper-input__show-pass wrapper-input__show-pass_open wrapper-input__show-pass_icon-eye"
                    type="button">
                </button>
            </div>
            <div class="wrapper-input">               
                <input class="wrapper-input__data wrapper-input__data_confirm" type="password" name="confirmPassword"
                    placeholder="Confirm Password">
                <button
                    class="wrapper-input__show-confirm wrapper-input__show-confirm_open wrapper-input__show-confirm_icon-eye"
                    type="button">
                </button>
            </div>
            <div class="wrapper-send-form">
                <button class="wrapper-send-form__button wrapper-send-form__button_register" type="submit" data-name="/signin">Sign Up ></button>
            </div>
        </form>
        <div class="wrapper-link">
            <span> Already have an account? </span>
            <a href="#" data-name="/signin">Sign in</a>
        </div>
    </main>
        `
    }
}

export default SignUp;
