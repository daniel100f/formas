function operacionesBasicas(){
var a;
var b;
var suma;
var resta;
var multi;
var divi;


var a=parseInt(prompt("por favor ingrese el primer valor"));
var b=parseInt(prompt("por favor ingrese el segundo valor"));

suma= a+b;
resta= a-b;
multi= a*b;
divi= a/b;
alert(" el resultado de la suma es "+ suma + "el resultado de la resta es  "
 + resta + " el resultado de la multiplicacion es " + multi + " el resultado de la division es " + divi);


}
function cuadradoDeUnNumero(){


    var num;
var multi
var num=parseInt(prompt("ingrese el valor"));
multi= num*num;

alert("el cuadrado del numero ingresado es " + multi);
}

function areaDeUnTriangulo(){
    var b;
    var h;
    var area;
    var h=parseInt(prompt("ingrese la altura"));
    var b=parseInt(prompt("ingrese la base"));
    area= b*h/2;
    alert("el are del triangulo es " + area);

}

function centimetrosAMetros(){
    var x;
    var conversion;
    var x=parseInt(prompt("ingrese el valor a convertir "));
    conversion = x*100
    alert("la conversion de metros a centimetros es " + conversion);


}
     
     circulo.onclick= function(e){
var selector= document.getElementById("cuadrado")
selector.classList.toggle("circulo")


     }
     derecha.onclick= function(e){
        var selector= document.getElementById("cuadrado")
         selector.classList.toggle("derecha")
             } 

             izquierda.onclick= function(e){
        var selector= document.getElementById("cuadrado")
         selector.classList.toggle("izquierda")
             
        }

        

            abajo.onclick= function(e){
                var selector= document.getElementById("cuadrado")
                 selector.classList.toggle("abajo")
                     
                }

 

