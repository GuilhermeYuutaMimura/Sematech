const input = document.querySelector('cpf')

input.addEventListener('keypress',() => {
    let inputlenght = input.ariaValueMax.length

    if (inputlenght === 3 || input.length === 7 ){
        input.value += "."
    }
} )