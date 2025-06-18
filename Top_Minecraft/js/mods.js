document.addEventListener("DOMContentLoaded", () => {
  
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const contentId = btn.getAttribute("data-target");
      const content = document.getElementById(contentId);

      content.classList.toggle("hidden");

      
      btn.textContent = content.classList.contains("hidden") ? "︾" : "︽";

      
      const container = btn.closest(".mod_section1");
      if (!content.classList.contains("hidden")) {
        container.appendChild(btn);
      } else {
        container.insertBefore(btn, content);
      }
    });
  });
});
