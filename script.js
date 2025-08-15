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

        // Formulario interactivo
        const form = document.querySelector('.form-contacto');
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulación de envío exitoso
            form.innerHTML = `
                <div style="text-align: center; padding: 50px 20px;">
                    <i class="fas fa-check-circle" style="font-size: 4em; color: #8B4513; margin-bottom: 20px;"></i>
                    <h3 style="font-size: 1.8em; margin-bottom: 20px;">¡Mensaje Enviado!</h3>
                    <p>Gracias por contactarnos. Te responderemos a la brevedad.</p>
                </div>
            `;
        });

        // Efecto parallax para el hero
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            document.querySelector('.hero').style.backgroundPositionY = `calc(50% + ${scrollY * 0.5}px)`;
        });



// Función para enviar el formulario con EmailJS
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Deshabilitar el botón de envío
        submitBtn.disabled = true;
        formStatus.textContent = "Enviando mensaje...";
        formStatus.className = "sending";
        
        // Enviar el formulario usando EmailJS
        emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', this)
            .then(() => {
                // Éxito
                formStatus.textContent = "¡Mensaje enviado con éxito! Te responderemos pronto.";
                formStatus.className = "success";
                
                // Resetear formulario después de 3 segundos
                setTimeout(() => {
                    contactForm.reset();
                    formStatus.style.display = "none";
                    submitBtn.disabled = false;
                }, 3000);
            }, (error) => {
                // Error
                formStatus.textContent = "Error al enviar el mensaje. Por favor, inténtalo de nuevo.";
                formStatus.className = "error";
                submitBtn.disabled = false;
                
                console.error('Error al enviar el formulario:', error);
            });
    });
}