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

        isMobile = 768;

        if(window.innerWidth <= isMobile ){
           console.log("is reponsive");
          // Si l'élément fixé est plus bas que le footer, on l'ajuste
          if (footerTop <= window.innerHeight) {
  
              fixedElement.style.marginBottom = `50%`;

          } else {
              // Sinon, l'élément reste en position fixe
              fixedElement.style.position = 'fixed';
              fixedElement.style.bottom = '30px';
              fixedElement.style.marginBottom = "auto";
          }

        } else{

          // Si l'élément fixé est plus bas que le footer, on l'ajuste
          if (footerTop <= window.innerHeight) {
            fixedElement.style.position = 'absolute';
            if(window.location.href.includes("site-vitrine-illustratrice")) {
                fixedElement.style.bottom = `-300px`;
              }else if (window.location.href.includes("exercice-ecommerce")) {
                fixedElement.style.bottom = `-180px`;
              }else if (window.location.href.includes("mini-reseau-social")) {
                fixedElement.style.bottom = `-160px`;
              }else if (window.location.href.includes("event-planner")) {
                fixedElement.style.bottom = `-160px`;
              }else if (window.location.href.includes("mini-projets")) {
                fixedElement.style.bottom = `-410px`;
              }else if (window.location.href.includes("works")) {
                fixedElement.style.bottom = `-980px`;
              }else if(window.location.href.includes("formations")) {
                fixedElement.style.bottom = `-680px`;
              }else if(window.location.href.includes("contact")) {
                fixedElement.style.bottom = `-600px`;
              }else if(window.location.href.includes("Mentions-legales")) {
                fixedElement.style.bottom = `50px`;
              }else if(window.location.href.includes("site-vitrine-illustratrice")) {
                fixedElement.style.bottom = `-300px`;
              }else {
                fixedElement.style.bottom = `-60%`;
              }
            
        } else {
            // Sinon, l'élément reste en position fixe
            fixedElement.style.position = 'fixed';
            fixedElement.style.bottom = '30px';
        }
      
        }
        

        
    }

    // Appel initial pour ajuster l'élément
    adjustFixedElement();

    // Écouter le défilement et ajuster la position de l'élément
    window.addEventListener('scroll', adjustFixedElement);
});

