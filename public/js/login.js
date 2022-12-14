const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const user = document.querySelector('#Login-modal-user').value.trim();
    const password = document.querySelector('#Login-modal-password').value.trim();
  
    if (user && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ user, password }),
        headers: { 'Content-Type': 'application/json' },
      });
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const user = document.querySelector('#Signup-modal-user').value.trim();
    const password = document.querySelector('#Signup-modal-password').value.trim();
  
    if (user && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ user, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
        document.querySelector('#successfulllogin').classList.remove("d-none")
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('#UserLoginForm')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('#UserSignUpForm')
    .addEventListener('submit', signupFormHandler);
  