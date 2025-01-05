const getStringFeedback = (data, configuracao) => {
    let result = '';
    if (data.eCleaning < configuracao.eCleaning || data.eCleaning > configuracao.eCleaning) {
        result += `Cleaning: ${configuracao.eCleaning} Cleaning (evaluation): ${data.eCleaning} \n`;
    }else{ result += `Excellent cleanliness! \n`}

    if (data.eComfort < configuracao.eComfort || data.eComfort > configuracao.eComfort) {
        result += `Comfort: ${configuracao.eComfort} Comfort (evaluation): ${data.eComfort} \n`;
    }else{ result += `Excellent comfort! \n`}

    if (data.eService < configuracao.eService || data.eService > configuracao.eService) {
        result += `Service: ${configuracao.eService} Service (evaluation): ${data.eService} \n`;
    }else{ result += `Excellent service! \n`}

    if (data.eAddservices < configuracao.eAddservices || data.eAddservices > configuracao.eAddservices) {
        result += `Additional Services: ${configuracao.eAddservices} Additional Services (evaluation): ${data.eAddservices} \n`;
    }else{ result += `Excellent additional services! \n`}

    let valorData = Number(data.eCleaning) + Number(data.eComfort) + Number(data.eService) + Number(data.eAddservices);
    let valorConfiguracao = configuracao.eCleaning + configuracao.eComfort + configuracao.eService
        + configuracao.eAddservices;

    if ( valorData <= valorConfiguracao+3 && valorData >= valorConfiguracao-3 ) {
        result += `Excellent review!`
    }else { result += `There are still things to improve.`}

    return result;
}

module.exports = {getStringFeedback};
