if (sessionStorage.getItem('logado')){
    const url = 'https://botafogo-atletas.mange.li/all';
    let lista_jogadores;

    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.flexWrap = 'wrap';
    container.style.gap = '2em';
    container.style.justifyContent = 'center';
    container.style.maxWidth = '1200px';
    container.style.margin = '0 auto';
    container.id = 'myContainer';

    document.body.appendChild(container);

    const escudo = document.createElement('img');
    escudo.src = 'assets/imagens/escudo.png';

    const title = document.createElement('h1');
    title.innerHTML = 'Elenco de Atletas';
    title.style.color = 'white';
    title.style.textAlign = 'center';
    title.style.fontFamily = 'sans-serif';
    title.style.textTransform = 'uppercase';
    title.style.margin = '0';
    title.style.padding = '0';

    const divEscudo = document.createElement('div');
    divEscudo.style.display = 'flex';
    divEscudo.style.width = '5rem';
    divEscudo.style.height = '5rem';

    divEscudo.appendChild(escudo);

    const btn_feminino = document.createElement('button');
    btn_feminino.innerHTML = 'Elenco Feminino';
    btn_feminino.onclick = () => {
        container.innerHTML = '';
        lista_jogadores.forEach(
            (jogador) => {
                if (jogador.elenco === 'feminino'){
                    constroiCard(jogador);
                }
            }
        )
    }

    const btn_masculino = document.createElement('button');
    btn_masculino.innerHTML = 'Elenco Masculino';
    btn_masculino.onclick = () => {
        container.innerHTML = '';
        lista_jogadores.forEach(
            (jogador) => {
                if (jogador.elenco === 'masculino'){
                    constroiCard(jogador);
                }
            }
        )
    }

    const btn_all = document.createElement('button');
    btn_all.innerHTML = 'Elenco Completo';
    btn_all.onclick = () => {
        container.innerHTML = '';
        lista_jogadores.forEach(
            (jogador) => {
                constroiCard(jogador);
            }
        )
    }

    const btn_sair = document.createElement('button');
    btn_sair.id = 'btn_sair';
    btn_sair.innerHTML = 'Sair';
    btn_sair.onclick = () => {
        sessionStorage.removeItem('logado');
        window.location.href = 'index.html';
    }

    const divPesquisa = document.createElement('div');
    divPesquisa.style.textAlign = 'center';
    divPesquisa.style.marginTop = '15px';
    divPesquisa.style.padding = '1rem';

    const inputPesquisa = document.createElement('input');
    inputPesquisa.id = 'inputPesquisa'
    inputPesquisa.placeholder = 'Pesquise por posição';
    inputPesquisa.type = 'text';
    divPesquisa.appendChild(inputPesquisa);

    const header = document.createElement('div');
    header.append(divEscudo);
    header.append(title);
    header.append(btn_sair);
    header.style.display = 'flex';
    header.style.flexWrap = 'wrap';
    header.style.backgroundColor = 'black';
    header.style.justifyContent = 'center';
    header.style.alignItems = 'center';
    header.style.padding = '0';
    header.style.margin = '0';
    header.style.height = '8rem';
    header.style.marginBottom = '5px';

    const botoes = document.createElement('div');
    botoes.style.display = 'flex';
    botoes.style.height = '4rem';
    botoes.style.justifyContent = 'center';
    botoes.style.marginBottom = '5px';
    botoes.style.gap = '1rem';
    botoes.appendChild(btn_masculino);
    botoes.appendChild(btn_feminino);
    botoes.appendChild(btn_all);

    document.body.appendChild(header);
    document.body.appendChild(botoes);
    document.body.appendChild(divPesquisa);
    document.body.appendChild(container);

    const handleClick = (e) => {
        const card = e.target.closest('article')
        const dados = card.dataset;

        for (const p in dados){
            document.cookie = `${p}=${dados[p]}`;
        }

        localStorage.setItem('atleta', JSON.stringify(dados));
        window.location.href = `detalhes.html?altura=${dados.altura}&elenco=${dados.elenco}`;
    }

    const constroiCard = ( atleta ) => {
        const divCard = document.createElement('article');
        //divCard.className = 'card';
        divCard.style.background = 'radial-gradient(circle, rgba(255,255,255,1) 29%, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%)';
        divCard.style.display = 'grid';
        divCard.style.width = '220px';
        divCard.style.padding = '.5rem';
        divCard.style.border = '3px solid black';
        divCard.style.borderRadius = '10px';
        divCard.style.gridTemplateRows = "20rem 2rem 5rem 5rem 1rem";
        divCard.style.gridTemplateAreas = "'a1' 'a2' 'a3' 'a4' 'a5'";

        divCard.dataset.id = atleta.id;
        divCard.dataset.descricao = atleta.descricao;
        divCard.dataset.nome = atleta.nome;
        divCard.dataset.nomeCompleto = atleta.nome_completo;
        divCard.dataset.posicao = atleta.posicao;
        divCard.dataset.imagem = atleta.imagem;
        divCard.dataset.elenco = atleta.elenco;
        divCard.dataset.nascimento = atleta.nascimento;
        divCard.dataset.altura = atleta.altura;

        divCard.onclick = handleClick;

        const imagem = document.createElement('img');
        imagem.style.gridArea = 'a1';
        imagem.style.display = 'flex';
        imagem.style.height = '20rem';
        imagem.style.width = 'fit-content';
        imagem.style.objectFit = 'cover';
        imagem.style.objectPosition = 'top';
        imagem.src = atleta.imagem;
        imagem.alt = atleta.nome;

        const titulo = document.createElement('section');
        //titulo.className = 'titulo';
        titulo.style.gridArea = "a2 a3";
        titulo.style.display = 'flex';
        titulo.style.flexDirection = 'column';
        titulo.style.alignItems = 'center';
        titulo.style.justifyContent = 'center';

        const pPosicao = document.createElement('p');
        pPosicao.style.fontWeight = 'bold';
        pPosicao.style.fontFamily = 'sans-serif';
        pPosicao.style.fontSize = '1.1rem';
        pPosicao.style.textTransform = 'uppercase';
        pPosicao.style.color = 'white';
        pPosicao.style.backgroundColor = 'black';
        pPosicao.style.width = '100%';
        pPosicao.style.height = '2rem';
        pPosicao.style.textAlign = 'center';
        pPosicao.style.position = 'relative';
        pPosicao.style.bottom = '-2rem';
        pPosicao.innerHTML = atleta.posicao;

        const pNome = document.createElement('p');
        pNome.style.fontWeight = 'bold';
        titulo.style.whiteSpace = 'wrap';
        pNome.style.fontFamily = 'sans-serif';
        pNome.style.fontSize = '1.5rem';
        pNome.style.textTransform = 'uppercase';
        pNome.style.textAlign = 'center';
        pNome.innerHTML = atleta.nome;

        const btn_more = document.createElement('button');
        btn_more.id = 'btn_more';
        btn_more.style.gridArea = 'a4';
        btn_more.innerHTML = 'SAIBA MAIS';

        const pDescri = document.createElement('p');
        //pDescri.className = 'descri'
        pDescri.style.gridArea = 'a3';
        pDescri.innerHTML = atleta.descricao;
        pDescri.style.overflow = 'hidden';
        pDescri.style.whiteSpace = 'nowrap';
        pDescri.style.textOverflow = 'ellipsis';

        const pNasci = document.createElement('p');
        //pNasci.className = 'nasci'
        pNasci.style.gridArea = 'a4';
        pNasci.innerHTML = atleta.nascimento;

        divCard.appendChild(imagem);
        
        titulo.appendChild(pPosicao);
        titulo.appendChild(pNome);

        divCard.appendChild(titulo);
        divCard.appendChild(btn_more)

        //divCard.appendChild(pDescri);
        //divCard.appendChild(pNasci);

        container.appendChild(divCard);
    }


    inputPesquisa.onkeyup = (event) => {
        const valor = event.target.value;
        const resultado = lista_jogadores.filter(
            (elemento) => elemento.posicao.toLowerCase().includes(valor.toLowerCase())
        )

        container.innerHTML= '';
        resultado.forEach(
            (jogador) => {
                constroiCard(jogador)
            }
        )
    }

    container.innerHTML = `
        <div style = 'text-align: center'>
            <img src = 'assets/imagens/loading.gif'/>
        </div>
    `;

    const pega_json = async(caminho) => {
        const resposta = await fetch(caminho);
        const dados = await resposta.json();
        return dados;
    }

    pega_json(url).then(
        (r) => {
        container.innerHTML = '';
        lista_jogadores = r;
        r.forEach(
        (jogadora) => {
            constroiCard(jogadora)
        }
        )
        }
    );
}else {
    document.body.innerHTML = '<h1>Você não está logado</h1>';
}
