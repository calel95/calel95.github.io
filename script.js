document.addEventListener("DOMContentLoaded", function () {
  // Lista de projetos com nome, descrição e link
  const projects = [
    {
      name: "CRUD",
      description: "CRUD - app de cadastro de produto",
      link: "https://github.com/calel95/primeiro_crud"
    },
    {
      name: "App de sorteio de rifa",
      description: "Sistema de sorteio de rifa",
      link: "https://github.com/calel95/sistema_de_rifa"
    },
    {
      name: "ETL Dinâmico",
      description: "Sistema de ETL com frontend, onde usuario escolhe operacoes de tratamento que deseja no dataframe",
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
      <a href="${project.link}" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
    `;
    projectList.appendChild(projectCard);
  });
});
