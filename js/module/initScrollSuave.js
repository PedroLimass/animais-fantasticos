// Scroll Suave
export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]'); //seleciona todos os links que começam com #

  function scrollToSection(event) {
    event.preventDefault(); //previne o comportamento padrão do link
    const href = event.currentTarget.getAttribute("href"); //pega o valor do atributo href
    const section = document.querySelector(href); //seleciona a seção com o valor do href
    // const topo = section.offsetTop; //pega a distância do topo da seção

    section.scrollIntoView({
      //faz o scroll até a seção
      behavior: "smooth",
      block: "start",
    });

    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
