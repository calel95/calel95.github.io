document.addEventListener("DOMContentLoaded", function () {
  // Lista de projetos com nome e link (adicione mais conforme necessário)
  const projects = [
    {
      name: "Projeto 1",
      description: "Descrição breve do projeto 1.",
      link: "https://github.com/calel95/primeiro_crud"
    },
    {
      name: "Projeto 2",
      description: "Descrição breve do projeto 2.",
      link: "https://github.com/calel95/sistema_de_rifa"
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
