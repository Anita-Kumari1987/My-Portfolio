let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
let sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzIcvKql0qI2C_WVAUyV0kMxuV_CDa9JQ_pSVAzAyf-i1XwpizZDRXa9RKYbuADJ4U4/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
let homePage = document.getElementsByTagName("body");
let logoImage = document.querySelector(".logo");

logoImage.addEventListener("click", () => {
  reloadPage();
});

function reloadPage() {
  window.location = '/index.html'; 
}

let project1 = document.querySelector('#tic-tac-toe');
project1.addEventListener('click', ()=>{
  window.open("https://anita-kumari1987.github.io/Tic-Tac-Toe/");
});

let project2 = document.querySelector('#library-project');
project2.addEventListener('click', ()=>{
  window.open("https://anita-kumari1987.github.io/My-Library/");
});

let project3 = document.querySelector('#weather-app');
project3.addEventListener('click', ()=>{
  window.open("https://anita-kumari1987.github.io/Weather-App/");
});
let project4 = document.querySelector('#sign-up-form');
project4.addEventListener('click', ()=>{
  window.open("https://anita-kumari1987.github.io/Sign-up-form/");
});

let project5 = document.querySelector('#admin-dashbord');
project5.addEventListener('click', ()=>{
  window.open("https://anita-kumari1987.github.io/Admin-dashboard-Work/");
});

let project6 = document.querySelector('#etch-a-sketch');
project6.addEventListener('click', ()=>{
  window.open("https://anita-kumari1987.github.io/Etch-a-sketch/");
});

let emailIcon = document.querySelector('#myemail');
emailIcon.addEventListener('click', ()=>{
  window.location.href = "mailto:anita.kumari1987@yahoo.com";
});

let facebookIcon = document.querySelector('#facebook');
facebookIcon.addEventListener('click', ()=>{
  window.open("https://www.facebook.com/anita.kumari.1614");
});

let instagramIcon = document.querySelector('#instagram');
instagramIcon.addEventListener('click', ()=>{
  window.open("https://www.instagram.com/anita60682024/");
});

let linkedinIcon = document.querySelector('#linkedin');
linkedinIcon.addEventListener('click', ()=>{
  window.open("https://www.linkedin.com/in/anita-kumari-91160723/");
});

let githubIcon = document.querySelector('#github');
githubIcon.addEventListener('click', ()=>{
  window.open("https://github.com/Anita-Kumari1987");
});





