let letmudaresquemasenha = 0;

const bntTrocarSenha = document.getElementById("icom-mostrar-senha");

const inputPassword = document.getElementById("inputPassword");

bntTrocarSenha.addEventListener("click", () => {
    if (letmudaresquemasenha == 0) {
        inputPassword.type = "text";
        letmudaresquemasenha = 1;
    } else if (letmudaresquemasenha == 1) {
        inputPassword.type = "password";
        letmudaresquemasenha = 0;
    }
});