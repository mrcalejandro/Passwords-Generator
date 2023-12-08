var na= document.querySelector('.entrada')
var texto= document.querySelector('.salida')
function contra() {
    let a= Number(na.value);
    let nueva= [];
    let caracteres= "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVYXWZ";
    var contraseña="";

    if(a >= 60){
        texto.innerText= "La contraseña no puede tener más de 60 caracteres"
    }
    else if(a <= 0){
        texto.innerText= "The password must be at least 1 character."
    }

    else{
        for(i=0;i<a;i++){
            let jalar= caracteres[Math.ceil(Math.random()*caracteres.length)];
            nueva.push(jalar);
                contraseña= nueva.join("");          
            }
            texto.innerText= "Congratulations your new password with "+a+ " characteres is: "+contraseña;
    }

}




