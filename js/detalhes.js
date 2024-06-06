async function fetchAtletaPorId(id) {
    const response = await fetch(`https://botafogo-atletas.mange.li/2024-1/${id}`);
    const data = await response.json();
    return data;
}

if (sessionStorage.getItem('logado')){
    const btn_voltar = document.createElement('button');
        btn_voltar.innerHTML = 'Voltar';
        btn_voltar.style.position = 'absolute';
        btn_voltar.style.top = '1rem';
        btn_voltar.style.left = '50%';
        btn_voltar.style.transform = 'translateX(-50%)';
        btn_voltar.style.padding = '.5rem';
        btn_voltar.style.border = 'white 2px solid';
        btn_voltar.style.borderRadius = '5px';
        btn_voltar.style.color = 'white';
        btn_voltar.style.backgroundColor = 'none';
        btn_voltar.style.background= 'none';
        btn_voltar.style.cursor = 'pointer';
        btn_voltar.onclick = () => {
            window.location.href = 'jogadores.html';
        }

    const constroiCard = ( atleta ) => {
        const divCard = document.createElement('article');
        divCard.style.backgroundColor = 'black';
        divCard.style.color = 'white';
        divCard.style.fontSize = '1.2rem';
        divCard.style.display = 'grid';
        divCard.style.width = '100rem';
        divCard.style.padding = '.5rem';
        divCard.style.position = 'absolute';
        divCard.style.top = '50%';
        divCard.style.left = '50%';
        divCard.style.transform = 'translate(-50%, -50%)';
        divCard.style.border = '2px solid grey';
        divCard.style.borderRadius = '5px';
        divCard.style.gridTemplateColumns = "25rem 1fr";
        divCard.style.gridTemplateAreas = "'a1 a2' 'a1 a3' 'a1 a4' 'a1 a5' 'a1 a6' 'a1 a7'";

        const imagem = document.createElement('img');
        imagem.style.gridArea = 'a1';
        imagem.style.height = 'fit-content';
        imagem.style.width = 'fit-content';
        imagem.style.objectFit = 'cover';
        imagem.src = atleta.imagem;
        imagem.alt = atleta.nome;

        const titulo = document.createElement('section');
        titulo.style.gridArea = 'a2';
        titulo.style.display = 'flex';
        titulo.style.flexDirection = 'column';
        titulo.style.alignItems = 'center';
        titulo.style.justifyContent = 'center';

        const pPosicao = document.createElement('p');
        pPosicao.style.fontWeight = 'bold';
        pPosicao.style.fontFamily = 'sans-serif';
        pPosicao.style.fontSize = '1rem';
        pPosicao.style.textTransform = 'uppercase';
        pPosicao.innerHTML = atleta.posicao;

        const pNome = document.createElement('p');
        pNome.style.fontWeight = 'bold';
        pNome.style.fontFamily = 'sans-serif';
        pNome.style.fontSize = '1.3rem';
        pNome.style.textTransform = 'uppercase';
        pNome.innerHTML = atleta.nome;

        const pDescri = document.createElement('p');
        pDescri.style.gridArea = 'a3';
        pDescri.innerHTML = atleta.detalhes;

        const pNasci = document.createElement('p');
        pNasci.style.gridArea = 'a4';
        pNasci.innerHTML = `Nascimento: ${atleta.nascimento}`;

        const pJogos = document.createElement('p');
        pJogos.style.gridArea = 'a5';
        pJogos.innerHTML = `Numero de jogos: ${atleta.n_jogos}`;

        const pNatu = document.createElement('p');
        pNatu.style.gridArea = 'a6';
        pNatu.innerHTML = `Naturalidade: ${atleta.naturalidade}`;

        const pExtra = document.createElement('p');
        pExtra.innerHTML = `id: ${atleta.id}| elenco: ${atleta.elenco}| altura: ${atleta.altura}` ;
        pExtra.style.gridArea = 'a7';

        divCard.appendChild(imagem);
        
        divCard.appendChild(titulo);
        titulo.appendChild(pPosicao);
        titulo.appendChild(pNome);

        divCard.appendChild(pDescri);
        divCard.appendChild(pJogos);
        divCard.appendChild(pNatu);
        divCard.appendChild(pNasci);
        divCard.appendChild(pExtra);

        document.body.appendChild(divCard);
    }

    document.body.appendChild(btn_voltar);

    const parametros = new URLSearchParams(window.location.search);

    // Obter o ID do atleta da URL
    const idAtleta = parametros.get('id');

    if (idAtleta) {
        // Buscar o atleta pelo ID
        fetchAtletaPorId(idAtleta).then(atleta => {
            console.log('Atleta:', atleta);
            constroiCard(atleta);
        }).catch(error => {
            console.error('Erro ao buscar atleta:', error);
        });
    } else {
        const h1 = document.createElement('h1');
        h1.style.color = 'white';
        h1.textContent = 'Jogador não encontrado';
        document.body.innerHTML = '';
        document.body.appendChild(btn_voltar);
        document.body.appendChild(h1);
    }

} else {
    const h1 = document.createElement('h1');
    h1.style.color = 'white';
    h1.textContent = 'Acesso negado, faça login para acessar essa página';
    document.body.innerHTML = '';
    document.body.appendChild(h1);
}