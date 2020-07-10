import {firstNameDiv, lastNameDiv, emailDiv} from './main';


const errorHandling = (error: any) => {

    if (error.response) {
        if (error.response.status === 422) {
            firstNameDiv!.innerHTML = 'Nome deve ter no minimo 3 caracteres moximo 15';
            lastNameDiv!.innerHTML = 'Sobrenome deve ter no minimo 3 caracteres moximo 15';
            emailDiv!.innerHTML = "O email deve ter minimo 5 coracteres e ter '@' ";

        } else if (error.response.status === 423) {
            emailDiv!.innerHTML = "Este email ja esta em uso";
        }
    } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
    }
}

export default errorHandling;
