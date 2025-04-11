const fristOptio = document.getElementById('frist-option');

const secondOption = document.getElementById('second-option');

let opcaoparam = 0;

fristOptio.addEventListener("click", () => {
    fristOptio.style.backgroundColor = "#F58D1D";
    secondOption.style.backgroundColor = "#F0F5FA";
    fristOptio.style.color = 'white'
    secondOption.style.color = 'black'
    fristOptio.style.transition = '0.4s'
    opcaoparam = 1;
})

secondOption.addEventListener("click", () => {
    secondOption.style.backgroundColor = "#F58D1D";
    fristOptio.style.backgroundColor = "#F0F5FA";
    secondOption.style.color = 'white'
    fristOptio.style.color = 'black'
    fristOptio.style.transition = '0.4s'
    opcaoparam = 2;
})