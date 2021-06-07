import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha')
const repetirSenha = document.querySelector('.repetir-senha')
const gerarSenha = document.querySelector('.gerar-senha');

export default () => {
    gerarSenha.addEventListener('click', e =>{
        e.preventDefault();
        const senha = geraSenha();
        senhaGerada.value = senha;
        repetirSenha.value = senha;
    });
};