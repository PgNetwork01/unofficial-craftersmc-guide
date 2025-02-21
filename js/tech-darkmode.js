
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
  document.body.style.backgroundColor = "#333333";
  document.body.style.color = "white";
};

const disableDarkmode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', null);
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
};

// Apply dark mode on page load if it was previously enabled
if (darkmode === "active") {
  enableDarkmode();
}

// Add click event listener to theme switch
if (themeSwitch) {
  themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    if (darkmode !== "active") {
      enableDarkmode();
    } else {
      disableDarkmode();
    }
  });
}
