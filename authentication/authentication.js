const userData = JSON.parse(localStorage.getItem("userData"));

if (!userData) {
  setTimeout(function () {
         window.location.href = "/index.html";
       }, 300)
}