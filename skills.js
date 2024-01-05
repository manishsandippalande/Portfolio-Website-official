let skills = [
  {
    name: "HTML",
    poster: "images/html.png",
    badge: "PRO",
  },
  {
    name: "CSS",
    poster: "images/css.png",
    badge: "PRO",
  },
  {
    name: "JAVASCRIPT",
    poster: "images/js.png",
    badge: "INTERMIDIATE",
  },
  {
    name: "SQL",
    poster: "images/sql.png",
    badge: "INTERMIDIATE",
  },
  {
    name: "ANGULAR",
    poster: "images/angular.png",
    badge: "BIGINNER",
  },
  {
    name: "BOOTSTRAP",
    poster: "images/bootstrap.svg",
    badge: "INTERMIDIATE",
  },
  {
    name: "PHP",
    poster: "images/php.png",
    badge: "BIGINNER",
  },
  
];
let skillcontainer = document.getElementById("skill-slider");

skills.forEach((skill) => {
  skillcontainer.innerHTML += `<div class="card-skill">
<span class="badge bg-success">${skill.badge}</span>
<img src="${skill.poster}" class="card-img-top" alt="HTML">
<div class="card-body">
    <p class="card-text">${skill.name}</p>
</div>
</div>`;
});
