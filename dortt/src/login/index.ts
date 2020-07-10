import { formDiv, passwordIncorr } from './main';
export const errorHandling = (error: any) => {
    // response if the user is not found
    if (error.response) {
        if (error.response.status = 404) {
            formDiv.innerHTML = 'Este usuario nao existe verifique o seu email';
        }
    } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
    }
}

