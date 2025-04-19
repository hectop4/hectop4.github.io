document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".cp-email");
    const textToCopy = "hectorjosepuentesruiz@gmail.com"; // Cambia esto al texto que deseas copiar

    cv_button = document.querySelector(".open-cv");

    cv_button.addEventListener("click", () => {
        const pdfUrl = "./src/Curriculum_Hector_Puentes.pdf"; // Cambia esto a la ruta absoluta o relativa correcta de tu archivo PDF
        window.open(pdfUrl, "_blank");
    });

    button.addEventListener("click", () => {
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
                console.log("Texto copiado al portapapeles");
                const overlay = document.createElement("div");
                overlay.textContent = "Email Copied";
                overlay.style.position = "fixed";
                overlay.style.left = "50%";
                overlay.style.transform = "translateX(-50%)";
                overlay.style.bottom = "20px";
                overlay.style.padding = "10px 20px";
                overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Medio transparente
                overlay.style.color = "white";
                overlay.style.borderRadius = "5px";
                overlay.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)";
                overlay.style.fontSize = "1rem";
                overlay.style.zIndex = "1000";
                document.body.appendChild(overlay);

                setTimeout(() => {
                    document.body.removeChild(overlay);
                }, 2000);
            })
            .catch((err) => {
                console.error("Error al copiar el texto: ", err);
            });
    });
});
