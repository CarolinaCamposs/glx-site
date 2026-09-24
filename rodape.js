document.addEventListener("DOMContentLoaded", function () {
  const rodape = document.querySelector("#rodape-site");

  if (!rodape) {
    console.error("Não encontrei <footer id='rodape-site'> nesta página.");
    return;
  }

  rodape.className = "rodape";
  rodape.innerHTML = `
    <div>
      <strong class="rodape-logo">GLX</strong>
      <p>Galpões Logísticos Express</p>
    </div>

    <div>
      <strong>Encontre o espaço para sua operação</strong>
      <p>Galpões logísticos, imóveis industriais e terrenos.</p>
    </div>

    <div class="rodape-links">
      <a href="index.html">Início</a>
      <a href="galpoes.html">Ver galpões</a>
    </div>

    <div class="rodape-contato">
      <strong>Fale com a GLX</strong>
      <div class="acoes-contato"></div>
    </div>

    <p class="direitos">© GLX Galpões Logísticos Express</p>
  `;

  if (typeof adicionarAcoesContato === "function") {
    adicionarAcoesContato(
      rodape.querySelector(".acoes-contato"),
      "os imóveis da GLX"
    );
  }
});