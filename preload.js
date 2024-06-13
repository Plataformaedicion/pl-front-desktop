window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }

  const loginForm = document.getElementById('login-form');

  if(loginForm === null) {
    console.error('No se encontró el formulario de inicio de sesión');
    return;
  }
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario

    // Obtener los valores de los campos de entrada
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Mostrar los valores en la consola
    console.log('Email:', username);
    console.log('Password:', password);

    // Puedes hacer más acciones aquí, como enviar los datos a través de IPC o a un servidor
  });
})