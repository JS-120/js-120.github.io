const homeElement = document.getElementById('home');
const toolElement = document.getElementById('tool');
const blogElement = document.getElementById('blog');

window.onload = () => {
  homeElement.style.display = "block";
  toolElement.style.display = "none";
  blogElement.style.display = "none";
}
function home() {
  homeElement.style.display = "block";
  toolElement.style.display = "none";
  blogElement.style.display = "none";
}
function tool() {
  homeElement.style.display = "none";
  toolElement.style.display = "block";
  blogElement.style.display = "none";
}
function blog() {
  homeElement.style.display = "none";
  toolElement.style.display = "none";
  blogElement.style.display = "block";
}
