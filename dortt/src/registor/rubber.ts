import { HideDiv } from './main';
import { HideDivSuccess } from './main';


const divSucess = '<div class="text-center text-light mt-5 jumbotron" style=" padding-top: 100px; padding-bottom: 100px; background-color: #0074ad; font-size: 17px;"><div class="row"><div class="offset-md-2 col-md-8"><h4 style="font-weight: bold; font-size: 30px;">Agradecemos pelo seu cadastro</h4><p>Veja o seu email enviamos lhe um codigo de disconto de 15% na compra de qualquer servico nosso.</p><p> Fale conosco pelo numero: +25884/+258874444689</p></div></div></div>'

//Hide the div in a escreva-se.html to put a new div with new content
const Hidder = () => {
    if (HideDiv.style.display === 'none') {
        HideDiv.style.display = 'block';
    } else {
        HideDiv.style.display = 'none';
        HideDivSuccess.innerHTML = divSucess;
    }
}

export default Hidder;