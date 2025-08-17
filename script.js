   // Menú responsive mejorado
        const menuToggle = document.getElementById('menu-toggle');
        const menu = document.getElementById('menu');
        
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('show');
            menuToggle.classList.toggle('active');
            
            // Animación para las barras del menú
            const spans = menuToggle.querySelectorAll('span');
            if (menu.classList.contains('show')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -8px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });

        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('#menu a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('show');
                menuToggle.classList.remove('active');
                
                // Restaurar las barras del menú
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            });
        });

        // Animaciones en scroll
        const animatedElements = document.querySelectorAll('[data-animate], .animate-left, .animate-right');
        
        const animateOnScroll = () => {
            animatedElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    el.classList.add('visible');
                }
            });
        };
        
        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll(); // Inicial

        // Botón scroll arriba
        const scrollBtn = document.getElementById('scrollTopBtn');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollBtn.style.display = 'block';
                
                // Cambio de estilo en navbar
                document.querySelector('.navbar').classList.add('scrolled');
            } else {
                scrollBtn.style.display = 'none';
                document.querySelector('.navbar').classList.remove('scrolled');
            }
        });
        
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

       

        // Efecto parallax para el hero
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            document.querySelector('.hero').style.backgroundPositionY = `calc(50% + ${scrollY * 0.5}px)`;
        });



        // Restricción Numero de Telefono
        const telefonoInput = document.getElementById('telefono');

telefonoInput.addEventListener('input', () => {
  if (!telefonoInput.value.startsWith('09')) {
    telefonoInput.setCustomValidity('El número de teléfono debe comenzar con 09');
  } else if (telefonoInput.value.length !== 10) {
    telefonoInput.setCustomValidity('El número de teléfono debe tener 10 dígitos');
  } else {
    telefonoInput.setCustomValidity('');
  }
});

//FORMULARIO FORMSPREE
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      formStatus.innerText = '¡Mensaje enviado con éxito!';
      form.reset();
    } else {
      formStatus.innerText = 'Error al enviar el mensaje. Inténtalo de nuevo.';
    }
  })
  .catch((error) => {
    formStatus.innerText = 'Error al enviar el mensaje. Inténtalo de nuevo.';
  });
});