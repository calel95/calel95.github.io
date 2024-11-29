document.addEventListener("DOMContentLoaded", function () {
  const projects = [
    {
      name: "CRUD - Cadastro de produtos",
      description: "Descrição breve do projeto 1.",
      link: "https://github.com/calel95/primeiro_crud"
    },
    {
      name: "Sistema de sorteio de rifa",
      description: "Descrição breve do projeto 2.",
      link: "https://github.com/calel95/sistema_de_rifa"
    },
    {
      name: "ETL Dinâmico",
      description: "Descrição breve do projeto 3.",
      link: "https://github.com/calel95/sistema_ETL"
    }
  ];

  const projectList = document.getElementById("project-list");

  projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.innerHTML = `
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">Ver no GitHub</a>
    `;
    projectList.appendChild(projectCard);
  });
});
