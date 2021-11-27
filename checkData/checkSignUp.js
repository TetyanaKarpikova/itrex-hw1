function getElement(selector) {
    return document.querySelector(selector);
}

const checkSignUp = () => {
    let status = true;

    const firstName = getElement(".wrapper-input__data_firstName");
    const lastName = getElement(".wrapper-input__data_lastName");
    const email = getElement(".wrapper-input__data_email");
    const password = getElement(".wrapper-input__data_password");
    const confirm = getElement(".wrapper-input__data_confirm");

    let arrValue = [firstName.value];
    arrValue.push(lastName.value);
    arrValue.push(email.value);
    arrValue.push(password.value);
    arrValue.push(confirm.value);
  
    for( let i = 0; i < arrValue.length; i++) {                
        if (!arrValue[i]) {
            status = false;            
        }
    }
  

    if (password.value !== confirm.value) {        
        status = false;
    }
  
    return status;
}

export default checkSignUp;