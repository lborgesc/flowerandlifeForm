const rand = (min, max) => Math.floor(Math.random() * (max - min) + min); 
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;:/*-+.!@#$%¨&*()+=[]~´^|/';
const geraSimbolos = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(){
    const senhaArray =[]

    for(let i = 0; i <= 1; i++){
        senhaArray.push(geraMaiuscula());
        senhaArray.push(geraMinuscula());
        senhaArray.push(geraNumero());
        senhaArray.push(geraSimbolos());
    }
    return senhaArray.join('');
}
