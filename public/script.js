document.addEventListener('DOMContentLoaded', function () {
    // Fonction pour ajuster la position de l'élément fixe
    function adjustFixedElement() {
        const footer = document.querySelector('footer');
        const fixedElement = document.querySelector('.navList');
        
        // Vérifier si l'élément existe avant d'essayer d'y accéder
        if (!fixedElement || !footer) {
            console.error('Élément ".navlist" ou "footer" introuvable.');
            return; // Quitte la fonction si les éléments ne sont pas trouvés
        }

        // Position du footer par rapport au bas de la page
        const footerTop = footer.getBoundingClientRect().top;

        // Si l'élément fixé est plus bas que le footer, on l'ajuste
        if (footerTop <= window.innerHeight) {
            fixedElement.style.position = 'absolute';
            fixedElement.style.bottom = `-400px`;
        } else {
            // Sinon, l'élément reste en position fixe
            fixedElement.style.position = 'fixed';
            fixedElement.style.bottom = '20px';
        }
    }

    // Appel initial pour ajuster l'élément
    adjustFixedElement();

    // Écouter le défilement et ajuster la position de l'élément
    window.addEventListener('scroll', adjustFixedElement);
});