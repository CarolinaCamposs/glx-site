const contatoGLX = {
  whatsapp: "5531991707000",
  email: "galpoes10logisticos@gmail.com"
};

function adicionarAcoesContato(container, assunto) {
  if (!container) return;

  container.replaceChildren();

  const numero = contatoGLX.whatsapp.replace(/\D/g, "");
  const email = contatoGLX.email.trim();

  if (numero) {
    const cartao = document.createElement("a");
    cartao.className = "contato-card";
    cartao.href =
      `https://wa.me/${numero}?text=` +
      encodeURIComponent(`Olá! Gostaria de saber mais sobre ${assunto}.`);
    cartao.target = "_blank";
    cartao.rel = "noopener noreferrer";

    const texto = document.createElement("span");
    texto.className = "contato-card-texto";

    const rotulo = document.createElement("small");
    rotulo.textContent = "WHATSAPP";

    const valor = document.createElement("strong");
    valor.textContent = "(31) 99170-7000";

    const seta = document.createElement("span");
    seta.className = "contato-card-seta";
    seta.setAttribute("aria-hidden", "true");
    seta.textContent = "↗";

    texto.append(rotulo, valor);
    cartao.append(texto, seta);
    container.append(cartao);
  }

  if (email) {
    const cartao = document.createElement("a");
    cartao.className = "contato-card";
    cartao.href =
      `mailto:${email}?subject=${encodeURIComponent(`Interesse em ${assunto}`)}`;

    const texto = document.createElement("span");
    texto.className = "contato-card-texto";

    const rotulo = document.createElement("small");
    rotulo.textContent = "E-MAIL";

    const valor = document.createElement("strong");
    valor.textContent = email;

    const seta = document.createElement("span");
    seta.className = "contato-card-seta";
    seta.setAttribute("aria-hidden", "true");
    seta.textContent = "↗";

    texto.append(rotulo, valor);
    cartao.append(texto, seta);
    container.append(cartao);
  }
}