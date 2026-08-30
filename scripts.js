

const form = document.querySelector(".formulario-fale-conosco")

const mascara = document.querySelector(".mascara-formulario")


// ========================================
// ABRIR FORMULÁRIO
// ========================================

function cliqueinobotao() {

    form.classList.add("ativo")

    mascara.classList.add("ativo")

}


// ========================================
// FECHAR FORMULÁRIO
// ========================================

function fecharFormulario() {

    form.classList.remove("ativo")

    mascara.classList.remove("ativo")

}


// ========================================
// CLICAR NA MÁSCARA
// ========================================

mascara.addEventListener("click", function () {

    fecharFormulario()

})


// ========================================
// TECLA ESC
// ========================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        fecharFormulario()

    }

})


// ========================================
// ENVIO DO FORMULÁRIO
// ========================================

form.addEventListener("submit", function (event) {

    event.preventDefault()

    alert(
        "Obrigado pelo contato! " +
        "Em uma aplicação real, os dados seriam enviados para o sistema da empresa."
    )

    form.reset()

    fecharFormulario()

})