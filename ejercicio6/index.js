var letras=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
var salir=true;

while(salir){
    var dni=prompt("ingresa tu numero de dni sin letra");
    if(dni>0 && dni<99999999){
        salir=false;
    }else{
        alert('Ingrese por favor un numero de dni valido')
    }
}

salir=true;
while(salir){
    var letra=prompt("ingresa la letra de tu numero de dni");

    if(letra.length==1){
        salir=false;
    }else{
        alert('Ingrese por favor un numero de letra valido')
    }
}

var calculo_letra_dni= dni%23;

if(letra.toUpperCase()==letras[calculo_letra_dni]){
    alert("la letra del dni es correcta "+letras[calculo_letra_dni] );
}else{
    alert("la letra del dni no es correcta ");
}


