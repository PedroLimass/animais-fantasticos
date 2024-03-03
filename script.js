//Navegação por Tabs
function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();
// Accordion List
function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

// Scroll Suave
function initScrollSuave() {
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

initScrollSuave();
