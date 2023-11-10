// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório

usernameInput.addEventListener("focus", ()=> {
    usernameLabel.classList.add("required-popup");
})

// Ocultar popup de campo obrigatório

usernameInput.addEventListener("blur", ()=> {
    usernameLabel.classList.remove("required-popup");
})

// Validar valor do input
usernameInput.addEventListener("change", (e)=> {
    let valor = e.target.value;

    if (valor.length < 3) {
        usernameInput.classList.add("error");
        usernameHelper.classList.add("visible");
        usernameHelper.innerText = 'O campo nome deve conter pelo menos 3 caracteres';
    } else {
        usernameInput.classList.remove("error");
        usernameHelper.classList.remove("visible");
        usernameInput.classList.add("correct");
    }
});

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

function mostrarPopup(input, label) {
    input.addEventListener("focus", () => {
        label.classList.add("required-popup")
    });
    input.addEventListener("blur", () => {
        label.classList.remove("required-popup")
    })
}

mostrarPopup (usernameInput, usernameLabel);
mostrarPopup (emailInput, emailLabel);

emailInput.addEventListener("change", (e) => {
    let valor = e.target.value;

    if (valor.includes("@") && valor.includes(".com")) {
        emailInput.classList.add("correct");
        emailInput.classList.remove("error");
        emailHelper.classList.remove("visible");
    } else {
        emailInput.classList.add("error");
        emailInput.classList.remove("correct");
        emailHelper.classList.add("visible");
        emailHelper.innerText = "O email deve conter '@' e '.com'";
    }
})
