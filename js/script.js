document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#loader').style.display = 'none';
});

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}

// Toggle dark and light mode

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const sidebarLink = document.querySelectorAll(".sidebar-link");
  const close = document.querySelectorAll(".sidebar-close");
  const bottomNav = document.querySelectorAll(".bottom-nav");
  const bottomNavItem = document.querySelectorAll(".nav-item");
  const bottomNavIcon = document.querySelectorAll(".botton-nav-icon");
  const ctaBtn = document.querySelectorAll(".cta-btn");
  const nav = document.querySelectorAll(".navbar");
  const toggleButton = document.getElementById("darkModeToggle");
  let isDarkMode = false;

  toggleButton.addEventListener("click", () => {
    if (isDarkMode) {
      // Light Mode
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      sidebar.style.backgroundColor = "white";
      sidebar.style.color = "black";
      bottomNav.forEach(nav => nav.style.backgroundColor = "white");
      sidebarLink.forEach(link => link.style.color = "#000");
      close.forEach(button => button.style.color = "black");
      bottomNavItem.forEach(nav => nav.style.color = "#333333");
      bottomNavIcon.forEach(nav => nav.style.color = "#333333");
      ctaBtn.forEach(nav => nav.style.backgroundColor = "#007bff");
      nav.forEach(nav => nav.style.backgroundColor = "#007bff");
      document.hero.classList.remove('darkmode')
      toggleButton.textContent = "dark_mode"; 
    } else {
      // Dark Mode
      document.body.style.backgroundColor = "#333333";
      document.body.style.color = "white";
      sidebar.style.backgroundColor = "#111111";
      sidebar.style.color = "white";
      bottomNav.forEach(nav => nav.style.backgroundColor = "#111111");
      sidebarLink.forEach(link => link.style.color = "#fff");
      close.forEach(button => button.style.color = "white");
      bottomNavItem.forEach(nav => nav.style.color = "white");
      bottomNavIcon.forEach(nav => nav.style.color = "white");
      ctaBtn.forEach(nav => nav.style.backgroundColor = "#111111");
      nav.forEach(nav => nav.style.backgroundColor = "#111111");
      toggleButton.textContent = "light_mode";
      document.hero.classList.add('darkmode')
    }
    isDarkMode = !isDarkMode;
  });
});


