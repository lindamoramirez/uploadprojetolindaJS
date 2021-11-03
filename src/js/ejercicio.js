function validar(){
	let name = form.nome;
	if (name.value == "") {
		alert("verifique o seu nome");
		name.focus();
		 return false;
	}
	else if (email.value == "") {
		alert("verifique o seu E-mail");
		email.focus();
		 return false;
	}
		  alert("obrigado seus dados foram enviados");

}
const aplicacion= document.querySelector(".container")

const url="https://jsonplaceholder.typicode.com/users"

fetch (url)
.then (res => res.json ())
.then (data => {
	data.forEach (usuario => {
		const p = document.createElement ("p")
		p.setAttribute ("id",usuario.id)
		p.innerHTML = usuario.name
		p.addEventListener ("click", function (){
			window.location.href = "./usuario.html?id=${usuario.id}"
		})
		aplicacion.appendChild (p)
	});
})
.catch(err => console.log (err))
