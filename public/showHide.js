document.addEventListener('DOMContentLoaded', function () {

    const arrowDown = document.querySelector(".show-cv");
    const cv = document.querySelector(".cv-scroll");

    function showCV() {
        cv.style.display = 'block'; // Assurez-vous que l'élément est affiché
        cv.classList.add('show');  // Ajoutez la classe 'show' pour déclencher la transition
        const arrowUp = arrowDown.querySelector("i");
        // Modifier l'icône de flèche
        arrowUp.classList.remove('fa-chevron-down');
        arrowUp.classList.add('fa-chevron-up');
    }

    function hideCV() {
        const arrowUp = arrowDown.querySelector("i");
        // Modifier l'icône de flèche
        arrowUp.classList.remove('fa-chevron-up');
        arrowUp.classList.add('fa-chevron-down');
        cv.classList.remove('show');  // Supprimez la classe 'show' pour déclencher la fermeture
    }

    function showOrHide() {
        if (cv.classList.contains('show')) {
            hideCV();
        } else {
            showCV();
        }
    }

    arrowDown.addEventListener("click", showOrHide);

});