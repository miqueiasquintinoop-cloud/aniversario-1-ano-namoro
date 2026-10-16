
document.addEventListener("DOMContentLoaded", function () {

    // Seleciona todos os cartões de fotos
    const fotos = document.querySelectorAll(".foto-card");

    fotos.forEach(function (foto) {

        // Permite clicar ou tocar para virar a foto
        foto.addEventListener("click", function () {

            // Vira somente a foto selecionada
            foto.classList.toggle("virada");

        });

        // Permite usar o teclado para acessar as fotos
        foto.setAttribute("tabindex", "0");
        foto.setAttribute("role", "button");
        foto.setAttribute("aria-pressed", "false");

        foto.addEventListener("keydown", function (evento) {

            if (evento.key === "Enter" || evento.key === " ") {

                evento.preventDefault();

                foto.classList.toggle("virada");

                foto.setAttribute(
                    "aria-pressed",
                    foto.classList.contains("virada") ? "true" : "false"
                );

            }

        });

        // Mantém o estado de acessibilidade sincronizado com o clique
        foto.addEventListener("click", function () {

            foto.setAttribute(
                "aria-pressed",
                foto.classList.contains("virada") ? "true" : "false"
            );

        });

    });

    console.log("Galeria romântica da Sara carregada! ❤️");

});
