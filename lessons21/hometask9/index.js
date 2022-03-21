export function finishForm() {
  const elementForm = document.querySelector('.login-form');
  const elementInputPassword = document.querySelector('input');
  elementInputPassword.setAttribute('type', 'password');
  const elementInput = document.createElement('input');
  elementInput.classList.add('input-login');
  elementInput.setAttribute('type', 'text');
  elementInput.setAttribute('name', 'login');
  elementForm.prepend(elementInput);
}
