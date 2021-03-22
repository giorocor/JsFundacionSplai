
function palindromo(palabra){
    var palindromo="";
    var longitud=palabra.length;

    for(var i=longitud-1;i>=0;i--){
        palindromo=palindromo+palabra.charAt(i);
    }
    return palabra==palindromo?"Es palindromo":"NO es palindromo"
}

alert(palindromo(prompt('Ingresa una palabra para evaluar si es palindromo')));


