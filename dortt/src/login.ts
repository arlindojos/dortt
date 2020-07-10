import api from './services/api';
import { email, password, button } from './login/main';
import { errorHandling } from './login/index';
import { passwordIncorr, formDiv } from './login/main';
import { responseHandler }  from './login/user';


class logUser {
    constructor() {
        this.logUserHandler();
    }
    logUserHandler() {
        button.onsubmit = event => this.getUser(event);
    }

    async getUser(event: any) {
        event.preventDefault();

        await api.post('/login', {

            emailUsr: email.value,
            passwordUsr: password.value

        }).then(Response => {
            if (Response.status === 224) {

                passwordIncorr.innerHTML = 'A sua palavra-passe esta incorrecta';
            } else {
                responseHandler(Response);

                // Cleaning inputs after registing user
                email.value = '';
                password.value = '';
                formDiv.innerHTML = '';
                passwordIncorr.innerHTML = '';
            }
        }).catch(errorHandling); 

    }
}

new logUser;