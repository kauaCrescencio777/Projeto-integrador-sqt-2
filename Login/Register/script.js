let mudaresquemasenha1 = 0;

let mudaresquemasenha2 = 0;

const BntShowPassWoed1 = document.getElementById("icon-show-password1");

const BntShowPassWoed2 = document.getElementById("icon-show-password2");

const input1 = document.getElementById('input1');

const input2 = document.getElementById('input2');

BntShowPassWoed1.addEventListener("click", () => {
    if(mudaresquemasenha1 == 0){
        input1.type = "text";
        mudaresquemasenha1 = 1
    }else if(mudaresquemasenha1 == 1){
        input1.type = "password";
        mudaresquemasenha1 = 0;
    }
})

BntShowPassWoed2.addEventListener("click", () => {
    if(mudaresquemasenha2 == 0){
        input2.type = "text";
        mudaresquemasenha2 = 1
    }else if(mudaresquemasenha2 == 1){
        input2.type = "password";
        mudaresquemasenha2 = 0;
    }
})

