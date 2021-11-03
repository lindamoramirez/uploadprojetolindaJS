const ul = document.getElementById("usuarios");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(json => lis_user(json))

function lis_user(usuarios) {
  usuarios.forEach(({name,  email}) => {
    const li = document.createElement("li");
    li.innerText = `Nome: ${name},  E-mail: ${email}`;
    ul.appendChild(li);
  })
}