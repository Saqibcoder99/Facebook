const userData = JSON.parse(localStorage.getItem("userData"));

if (!userData) {
  setTimeout(function () {
         window.location.href = "/login";
       }, 300)
}