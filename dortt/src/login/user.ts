import { HiveDiv, logSucess } from './main';


export const responseHandler = (Response: any) => {
    const { firstName, lastName, emailUsr, websites, program, createdAt } = Response.data;

    let conteudo: string;
    if (websites === true && program === true) {
        conteudo = 'Programacao e Websites';
    } else if (program === true) {
        conteudo = 'Programacao';
    } else if (websites === true) {
        conteudo = 'Websites';
    } else {
        conteudo = 'Nenhum';
    }

    const sucssLog = `<h3 class="title textext-uppercase">Obrigado por fazer parte de nos</h3><div class="row"><div class="offset-md-3 col-md-6 " style = "background: #f5f7fa"><div class="row profile_pic"><div class="col-md-3"><img src="../img/undraw_profile_pic_ic5t.svg" style = "width: 120px" alt = "profile_pic"></div><div class="col-md-8 mt-5"><h4 class="title textext-uppercase" style= "border-bottom: 1px solid #246870; margin-top:20px;">${firstName}  ${lastName}</h4></div><ul class="list-group list-group-flush mt-3"><li class="list-group-item"  style = "background-color:transparent;"> <strong style="margin-right: 130px;"> Email: </strong>${emailUsr}</li><li class="list-group-item" style = "background-color:transparent;"> <strong style="margin-right: 95px;"> Conteudo: </strong>${conteudo}</li><li class="list-group-item" style = "background-color:transparent;"> <strong style="margin-right: 45px;"> Data da criacao: </strong>${createdAt}</li></ul></div></div></div>`

    if (HiveDiv.style.display === 'none') {
        HiveDiv.style.display = 'block';
    } else {
        HiveDiv.style.display = 'none';
        logSucess.innerHTML = sucssLog;
    }

}