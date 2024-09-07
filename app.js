function pesquisar() {
  // Seleciona a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa")

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  if (campoPesquisa == "") {
    section.innerHTML = "<p>Nenhum personagem foi encontrado. Digite novamente.</p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados formatados
  let resultados = ""
  let titulo = ""
  let descricao = ""
  let aniversario = ""
  let familia = ""

  // Itera sobre cada resultado da pesquisa
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    aniversario = dado.aniversario.toLowerCase()
    familia = dado.familia.toLowerCase()
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || aniversario.includes(campoPesquisa) || familia.includes(campoPesquisa)) {
      // Cria um novo bloco HTML para cada resultado
      resultados += `
      <div class="flex-container">
      <div class="item-resultado">
      <img src=${dado.imagem}>
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="infos">${dado.descricao}</p>
        <p class="infos">Aniversário: ${dado.aniversario}</p>
        <p class="infos">Famíllia: ${dado.familia}</p>
      </div>
      </div>
    `;
    }
  }

  if (!resultados){
    resultados = "<p>Nada foi encontrado.</p>"
  }

  // Atualiza o conteúdo HTML da seção com os resultados formatados
  section.innerHTML = resultados;
}





