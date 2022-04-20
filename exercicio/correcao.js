function clicou(){
    var a=parseFloat(prompt("digite seu numero"));
    var b=parseFloat(prompt("digite seu numero"));
    document.querySelector("#soma").innerHtml="resultado da soma é: "+(a+b);
    document.querySelector("#sub").innerHtml="resultado da subtrção é: "+(a-b);
    document.querySelector("#mult").innerHtml="resultado da multiplicação é: "+(a*b);
    document.querySelector("#div").innerHtml="resultado da divisão é: "+(a/b);
}