    // Definindo os pontos para cada projeto
    const pontosProjetos = [
      { nome: "Esportes", pontos: 0, imagem: "https://forcajovemuniversal.com/wp-content/uploads/2021/02/patch_esportes.png" },
      { nome: "Mídia", pontos: 1, imagem: "https://forcajovemuniversal.com/wp-content/uploads/2021/02/patch_midia.png" },
      { nome: "Help", pontos: 0, imagem: "https://forcajovemuniversal.com/wp-content/uploads/2021/02/patch_help.png" },
      { nome: "Uniforça", pontos: 1, imagem: "https://forcajovemuniversal.com/wp-content/uploads/2021/02/patch_uniforca.png" },
      { nome: "Universitários", pontos: 0, imagem: "https://forcajovemuniversal.com/wp-content/uploads/2021/02/patch_universitarios.png" },
      { nome: "Assistentes", pontos: 0, imagem: "https://forcajovemuniversal.com/wp-content/uploads/2021/02/patch_assistentes.png" },
      { nome: "Atalaia", pontos: 1, imagem: "https://forcajovemuniversal.com/wp-content/uploads/2021/02/patch_atalaia.png" },
      { nome: "Cultura", pontos: 1, imagem: "https://forcajovemuniversal.com/wp-content/uploads/2021/02/patch_cultura.png" },
      { nome: "Arcanjos", pontos: 0, imagem: "https://forcajovemuniversal.com/wp-content/uploads/2021/02/patch_arcanjos.png" }
    ];

    // Calculando o total de pontos
    const totalPontos = pontosProjetos.reduce((acc, projeto) => acc + projeto.pontos, 0);

    // Simulação de dados de projetos e porcentagens com links de imagens da internet
    const dadosProjetos = pontosProjetos.map(projeto => ({
      nome: projeto.nome,
      porcentagem: totalPontos > 0 ? (projeto.pontos / totalPontos * 100).toFixed(2) : 0,
      imagem: projeto.imagem
    }));

    // Função para classificar os projetos por porcentagem em ordem decrescente
    function classificarProjetos(dados) {
      return dados.sort((a, b) => b.porcentagem - a.porcentagem);
    }

    // Função para renderizar a tabela com os dados
    function renderRanking(dados) {
      const rankingTable = document.getElementById("rankingTable");

      dados.forEach((projeto, index) => {
        const row = document.createElement("tr");

        const cellNome = document.createElement("td");

        // Criar um contêiner para a classificação, imagem e nome
        const projectNameContainer = document.createElement("div");
        projectNameContainer.classList.add("project-name");

        // Adicionar a classificação à esquerda
        const rankingText = document.createElement("span");
        rankingText.textContent = `${index + 1}°`; // Adiciona a classificação
        rankingText.classList.add("ranking-text"); // Classe para estilização
        projectNameContainer.appendChild(rankingText); // Adiciona a classificação ao contêiner

        // Criar o elemento de imagem com link da internet
        const img = document.createElement("img");
        img.src = projeto.imagem; // URL da imagem
        img.alt = projeto.nome;
        img.classList.add("img-projeto");

        const textNome = document.createElement("span");
        textNome.textContent = projeto.nome;

        // Adicionar a imagem e o nome ao contêiner
        projectNameContainer.appendChild(img);
        projectNameContainer.appendChild(textNome);

        // Adicionar o contêiner ao cellNome
        cellNome.appendChild(projectNameContainer);

        const cellPorcentagem = document.createElement("td");
        const progressContainer = document.createElement("div");
        progressContainer.classList.add("progress-container");

        const progressBar = document.createElement("div");
        progressBar.classList.add("progress-bar");
        progressBar.style.width = '0%'; // Inicializa com 0% para a animação
        progressBar.innerHTML = `<p>${projeto.porcentagem}%</p>`;

        progressContainer.appendChild(progressBar);
        cellPorcentagem.appendChild(progressContainer);

        row.appendChild(cellNome);
        row.appendChild(cellPorcentagem);

        rankingTable.appendChild(row);

        // Animação do progresso, ajustando a porcentagem depois de um pequeno atraso
        setTimeout(() => {
          progressBar.style.width = projeto.porcentagem + '%'; // Ajusta a largura da barra de progresso
        }, 100 * index); // Atraso baseado na posição do projeto
      });
    }

    // Classifica os projetos e renderiza a tabela
    const projetosClassificados = classificarProjetos(dadosProjetos);
    renderRanking(projetosClassificados);
