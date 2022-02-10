document.getElementById('login-submit').addEventListener('click',function () {

    // get email
   const emailField = document.getElementById('user-email');
   const userEmail = emailField.value;

   // get password
   const passwordField = document.getElementById('user-password');
   const userPassword = passwordField.value; 

   if (userEmail ==  'sontan@gmaill.com' && userPassword == 'secret') {
      window.location.href = 'banking.html';      
   }
});

