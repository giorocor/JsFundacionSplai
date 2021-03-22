
var num=prompt('Ingresa un numero para calcular su factorial')
var factorial=num;

for(var i=num;i>1;i--){
    factorial=factorial*(i-1)
}
alert(factorial);