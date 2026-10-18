document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    console.log("LOMBRA: navigation opened");
  });
});

document.querySelectorAll(".project").forEach(project => {
  project.addEventListener("click", () => {
    project.classList.toggle("selected");
  });
});