document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('home').addEventListener('click', () => {
    window.location.href = 'index.html';
  });
  document.getElementById('mods').addEventListener('click', () => {
    window.location.href = 'mods.html';
  });
  document.getElementById('shaders').addEventListener('click', () => {
    window.location.href = 'shader.html';
  });
  document.getElementById('rsp').addEventListener('click', () => {
    window.location.href = 'rsp.html';
  });
});