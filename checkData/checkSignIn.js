function getElement(selector) {
    return document.querySelector(selector);
}

const checkSignIn = () => {
    let status = true;

    const email = getElement(".wrapper-input__data_email");
    const password = getElement(".wrapper-input__data_password");  

    let arrValue = [email.value];   
    arrValue.push(password.value);
      
    for( let i = 0; i < arrValue.length; i++) {                
        if (!arrValue[i]) {
            status = false;            
        }
    }
    
    return status;
}

export default checkSignIn;