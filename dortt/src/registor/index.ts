import { firstNm, lastNm, password, cfrPassword, formDiv, pro, web, email, firstNameDiv, lastNameDiv, emailDiv } from './main';

//Clean token
export const CleanToken = () => {
    firstNm.value = '';
    lastNm.value = '';
    email.value = '';
    password.value = '';
    cfrPassword.value = '';
    formDiv!.innerHTML = '';
    firstNameDiv!.innerHTML = '';
    lastNameDiv!.innerHTML = '';
    emailDiv!.innerHTML = '';
    pro.checked = false;
    web.checked = false;
}