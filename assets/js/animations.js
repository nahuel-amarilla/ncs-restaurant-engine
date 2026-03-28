document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            // Bloqueamos el scroll cuando el menú está abierto
            document.body.classList.toggle('overflow-hidden');
        });

        // Cerrar al clickear opciones
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                document.body.classList.remove('overflow-hidden');
            });
        });
    }
});