 // Menú móvil
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navMenu = document.getElementById('navMenu');
        
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        // Cambiar mes activo
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Cerrar menú móvil después de seleccionar
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                }
                
                console.log(`Mes seleccionado: ${link.textContent}`);
                // Aquí puedes agregar lógica para mostrar contenido del mes
            });
        });