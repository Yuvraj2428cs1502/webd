document.querySelector('.submit-button button').addEventListener('click', function(event) {
  
    event.preventDefault();

    const emailInput = document.querySelector('.email input');
    const emailValue = emailInput.value;

   
    if (!emailValue.includes('@') || !emailValue.includes('.')) {
        alert('Please enter a valid email address.');
    } else {
        alert('A reset link has been sent to your email!');
       
        emailInput.value = '';
    }
});
