
const sennha = document.querySelector('.senha')
const mostrarSenha = document.querySelector('.mostraSenha')

export default function mostraSenha() {
    mostrarSenha.addEventListener('click', () =>{
        if(sennha.type === 'password'){
            sennha.type = 'text';
        }else {
            sennha.type = 'password';
        }
    })


}