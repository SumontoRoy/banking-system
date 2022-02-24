document.getElementById('login-button').addEventListener('click', function () {
    const userEmail = document.getElementById('email-input').value;
    const userPassword = document.getElementById('password-input').value;
    if (userEmail == 'shakhor' && userPassword == '123') {
        window.location.href = "banking.html";
    } else {
        console.log('please enter valid useremail and password');
    }
});



