import { hex_sha256 } from "./sha256-min.mjs";

const alvo = '80f4da5cecdc93c26eedf379cb0d7e4786e7996eb47b26f82dba5770e44dc999';
const sal = 'Trabalho-Desenvolvimento-Web-2024-1';
const mensagem =  document.getElementById('mensagem')

document.getElementById('btn_enviar').onclick = () =>{
    const entrada = document.getElementById('senha').value;
    if (hex_sha256(entrada + sal) === alvo){
        sessionStorage.setItem('logado', '1');
        window.location.href = 'jogadores.html';
    }else{
        mensagem.innerHTML = 'Senha incorreta';
    }
}