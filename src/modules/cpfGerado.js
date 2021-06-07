import GerarCPF from './GerarCPF';

const cpf = document.querySelector('.cpf');
const mostraCpf = document.querySelector('.gerar-cpf');

export default function mostrarCpf() {
    mostraCpf.addEventListener('click', e => {
        e.preventDefault();
        const gera = new GerarCPF();
        cpf.value = gera.geraNovoCpf();
    })
} 


