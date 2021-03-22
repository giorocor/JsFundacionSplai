

function evaluarTexto(texto){

    if(texto.match(/[A-Z]/)&&texto.match(/[a-z]/)){
        return "Mayuscula y minuscula";
    }else if(texto.match(/[A-Z]/)){
        return "Solo Mayuscula";
    }else if(texto.match(/[a-z]/)){
        return "Solo Minuscula";
    }

}


alert(evaluarTexto(prompt('Ingresa un texto')));