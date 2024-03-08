// Animação ao Scroll
export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      } else {
        section.classList.remove("ativo");
      }
    });
  }
  animaScroll(); // ativa a função para adicionar a classe ativo quando o site é carregado para ser aplicado no primeiro item/bloco do site

  window.addEventListener("scroll", animaScroll);
}
