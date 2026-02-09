var emailPhone = document.getElementById("ph");
var password = document.getElementById("password");

function sweetAlert2(message) {

    Swal.fire({
        icon: `error`,
        title: "Oops...",
        text: "Something went wrong!",
        footer: `<a href="#">${message}!</a>`
    });
}



function submitHandler(e) {

    e.preventDefault();
    if (emailPhone.value.trim() == "") {
        sweetAlert2("Please Enter a Email")
        return
    }
    if (password.value.trim() == "") {
        sweetAlert2("Please Enter a Password")
        return
    }
    if (password.value.length <= 7) {
        sweetAlert2("Please Enter at Least 8 character")
        return
    }
    let usersFromDB = JSON.parse(localStorage.getItem("users"));
    //console.log(usersFromDB)
    let isAccountExists = false;
    for (i = 0; i < usersFromDB.length; i++) {
        let facebookUsers = usersFromDB[i];
        if (facebookUsers.emailAddress === emailPhone.value) {
            let isAccountExists = true;
            if (facebookUsers.password == password.value) {
                localStorage.setItem("userData", JSON.stringify(facebookUsers));
               Swal.fire({
                    title: "Congratulations!",
                    icon: "success",
                    draggable: true
                });
                setTimeout(function () {
                    window.location.href = "../dashboard/dashboard.html"
                }, 4000)
                return
            }   else {
                sweetAlert2("Please Enter a Correct Password")
                return
            }

        }
    }

    if (isAccountExists === false) {
        Swal.fire({
            icon: `error`,
            title: "Account not Exists",
            text: "You don't have an account, Please create your account!",
        });
        return
    }
};