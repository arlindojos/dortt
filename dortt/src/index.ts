import api from './services/api';
import errorHandling from './registor/validation';
import { CleanToken } from './registor/index'; 
import { password, cfrPassword, formDiv, button, firstNm, lastNm, pro, web, email } from './registor/main';
import Hidder from './registor/rubber';

// Starting registor
class registor {
    constructor() {
        this.registorHendler();
    }

    registorHendler() {
        button.onsubmit = event => this.addUser(event);   
    }

    async addUser(event: any) {
        event.preventDefault();

        // checking if Websites is checked or not
        let website: boolean;
        if (web.checked) {
            website = true;
        } else {
            website = false;
        }

        // checking if Program��o is checked or not
        let programacao: boolean;
        if (pro.checked) {
            programacao = true;
        } else {
            programacao = false;
        }
        // cheking passwords
        if (password.value !== cfrPassword.value) {
            formDiv!.innerHTML = 'As suas palavras-passe nao se correspondem';
           
        } else {
            await api.post('/', {
                firstName: firstNm.value,
                lastName: lastNm.value,
                emailUsr: email.value,
                passwordUsr: password.value,
                websites: website,
                program: programacao

            }).then(Response => {
                // Cleaning inputs after registing user
                CleanToken();
                Hidder();

            }).catch(errorHandling);   
        }   
    }
}
new registor();