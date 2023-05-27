const nomeInputRef = document.querySelector('#nomeInput');
const emailInputRef = document.querySelector('#emailInput');
const passwordRef = document.querySelector('#password');
const passwordConfRef = document.querySelector('#passwordConf');
const formularioButonRef = document.querySelector('#formularioButon');

let userName = ''

nomeInputRef.addEventListener('keyup', (event) => {
    
    const inputValue = event.target.value

    userName = inputValue

})

formularioButonRef.addEventListener('click', (event) => {

    event.preventDefault()

    console.log(userName)

})