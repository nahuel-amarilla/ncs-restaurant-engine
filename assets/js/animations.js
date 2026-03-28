document.addEventListener('DOMContentLoaded', () => {
    // 1. Efecto de aparición para los elementos del Hero
    const heroContent = document.querySelector('.relative.z-10');
    
    // Aplicamos un pequeño delay para que la imagen cargue primero
    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 500);

    // 2. Observer para que los platos aparezcan cuando hacés scroll
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Seleccionamos todos los platos del menú
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        // Estado inicial invisible para la animación
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.8s ease-out';
        observer.observe(item);
    });
});