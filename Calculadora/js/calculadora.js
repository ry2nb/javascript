function soma()
{
  console.log('String')
 var resp = document.getElementById('resp');
 var num1 = parseFloat(document.getElementById("num1").value);
 console.log(num1)
 var num2 = parseFloat(document.getElementById("num2").value);
console.log(num2)
 var texto='';

 
  texto = num1+num2;
 console.log(texto)
 resp.value = texto;
}
function subtracao()
{
console.log('String')
var resp = document.getElementById('resp');
var num1 = parseFloat(document.getElementById("num1").value);
var num2 = parseFloat(document.getElementById("num2").value);
 var texto='';

 texto= num1-num2;  
 resp.value = texto;
}
function multiplicacao()
{
console.log('String')
var resp = document.getElementById('resp');
var num1 = parseFloat(document.getElementById("num1").value);
var num2 = parseFloat(document.getElementById("num2").value);
 var texto='';

 texto= num1*num2;  
 resp.value = texto;
}
function divisao()
{
console.log('String')
var resp = document.getElementById('resp');
var num1 = parseFloat(document.getElementById("num1").value);
var num2 = parseFloat(document.getElementById("num2").value);
 var texto='';

 texto= num1/num2;  
 resp.value = texto;
}



