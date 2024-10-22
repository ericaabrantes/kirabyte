// carrossel projetos
let slideIndex = 0;
mostrarSlides(slideIndex);

function mostrarSlides(n) {
    let slides = document.querySelectorAll(".slide");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    slides[slideIndex].style.display = "block";
}

document.querySelector(".next").addEventListener("click", () => {
    slideIndex++;
    mostrarSlides(slideIndex);
});

document.querySelector(".prev").addEventListener("click", () => {
    slideIndex--;
    mostrarSlides(slideIndex);
});



// formulario de email integracao

document.querySelector('.contato__formulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Coleta os dados do formulário
    var params = {
        nome: document.getElementById('nome').value,
        whatsapp: document.getElementById('whatsapp').value,
        email: document.getElementById('email').value,
        mensagem: document.getElementById('mensagem').value
    };

    // Envia o e-mail através do EmailJS
    emailjs.send("service_07b5nb2", "template_9dfrnoo", params)
        .then(function (response) {
            // Exibe mensagem de sucesso
            alert('Formulário enviado com sucesso! Entraremos em contato em breve');

            // Limpa os campos do formulário
            event.target.reset();
        }, function (error) {
            alert('Ocorreu um erro ao enviar o formulário: ' + JSON.stringify(error));
        });
});

// Prevenir envio ao pressionar "Enter"
document.querySelectorAll('.contato__campos').forEach(function (input) {
    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Previne o envio do formulário ao pressionar Enter
        }
    });
});



// -------------------texto digitado-------------------------


  document.addEventListener("DOMContentLoaded", function () {
    const frases = [
      "se conectar com sua audiência.",
      "alcançar seus objetivos.",
      "construir uma presença digital impactante."
    ];

    const dynamicText = document.getElementById("dynamic-text");
    let fraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false; // Para controlar se está deletando ou escrevendo

    function typeWriter() {
      const currentFrase = frases[fraseIndex];
      
      // Atualiza o texto mostrado, dependendo se está escrevendo ou deletando
      if (!isDeleting) {
        dynamicText.innerHTML = currentFrase.substring(0, charIndex + 1);
        charIndex++;
      } else {
        dynamicText.innerHTML = currentFrase.substring(0, charIndex - 1);
        charIndex--;
      }

      // Se terminou de escrever a frase
      if (charIndex === currentFrase.length && !isDeleting) {
        isDeleting = true; // Começa a deletar
        setTimeout(typeWriter, 2000); // Espera um pouco antes de deletar
      }
      // Se terminou de deletar
      else if (charIndex === 0 && isDeleting) {
        isDeleting = false; // Vai para a próxima frase
        fraseIndex = (fraseIndex + 1) % frases.length; // Alterna entre as frases
        setTimeout(typeWriter, 500); // Pequeno intervalo antes de começar a escrever a nova frase
      } else {
        // Controla a velocidade de digitação e deleção
        const typingSpeed = isDeleting ? 60 : 100; // Digita mais devagar, apaga mais rápido
        setTimeout(typeWriter, typingSpeed);
      }
    }

    typeWriter(); // Inicializa a função
  });

