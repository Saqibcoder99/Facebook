var firstName = document.getElementById("f-name");
var lastName = document.getElementById("l-name");
var birthDay = document.getElementById("S-1");
var birthMonth = document.getElementById("S-2");
var birthYear = document.getElementById("S-3")
var Address = document.getElementById("address")
var newPassword = document.getElementById("new password")
var genderChecked = document.getElementsByName("gender")
var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
//let dataStore = [];
//localStorage.setItem("users", JSON.stringify(dataStore));
function sweetAlert2(message) {

    Swal.fire({
        icon: `error`,
        title: "Oops...",
        text: "Something went wrong!",
        footer: `<a href="#">${message}!</a>`
    });
}
function submitHandler(e) {
    //console.log(genderChecked[0].checked)

    e.preventDefault();
    if (firstName.value.trim() == "") {
        sweetAlert2("Please Enter a First Name")
        return
    }

    if (lastName.value.trim() == "") {
        sweetAlert2("Please Enter a Last Name")
        return
    }
    if (birthDay.value == "day" || birthMonth.value == "month" || birthYear.value == "year") {
        sweetAlert2("Please Select a DOB")
        return
    }
    /*if (Address.value.trim() == "") {
        sweetAlert2("Please Enter a address")
        return
    }*/
    if (!(Address.value.match(regex))) {
        sweetAlert2("Please Enter a  true email address")
        return
    }
    if (newPassword.value.trim() == "") {
        sweetAlert2("Please Enter a password")
        return
    }
    if (newPassword.value.length <= 7) {
        sweetAlert2("Please Enter at Least 8 character")
        return
    }
    let dataObj = {
        name: firstName.value,
        surName: lastName.value,
        DOB: birthDay.value,
        MOB: birthMonth.value,
        YOB: birthYear.value,
        emailAddress: Address.value,
        password: newPassword.value,
    }
   
    for (i = 0; i < genderChecked.length; i++) {
        if (genderChecked[i].checked) {
            dataObj.gender = genderChecked[i].value
        }
    }
//localStorage.setItem("users", JSON.stringify(dataStore));
 
    let checkingEmail = JSON.parse(localStorage.getItem("users"))||[];
   // console.log(checkingEmail)
    checkingEmail.push(dataObj)
    localStorage.setItem("users", JSON.stringify(checkingEmail));
        Swal.fire({
        title: "Congratulations!",
        icon: "success",
        draggable: true
    });
    firstName.value = "";
    lastName.value = "";
    birthDay.value = "";
    birthMonth.value = "";
    birthYear.value = "";
    Address.value = "";
    newPassword.value = "";
     setTimeout(function () {
           window.location.href = "../index.html"
       }, 5000)
}