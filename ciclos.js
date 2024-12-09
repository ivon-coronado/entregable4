function realizaroperacion() {
    let continuar=true;
    while (continuar){

    let num1 = parseFloat( prompt( " ingrese un valor"));
    let num2 = parseFloat( prompt( "ingrese el valor"));
    let operacion = prompt( "ingrese la operacion a realizar(+-*/)si desea salie escriba sali");
    let resultado = ( num1,num2);

    if (operacion == "+"){
        resultado = num1 + num2;
} else if ( operacion ==="-"){
  resultado = num1 - num2;
    }

else if(operacion === "*") {
    resultado = num1 * num2;
}  else if (operacion === "/") {
    if (num2 !== 0) {
        resultado = num1 / num2;
    }else {

        resultado = ("no se puede dividir entre 0");}
    }

else if ( operacion==="salir"){ 
            continuar=false;
            document.write("salio de la operacion");
            break;
          }
   else{
    resultado=("error de operacion")
   }     
   document.write("el resultado es: "+resultado+"<br>");  
        
    }
}

    realizaroperacion();
