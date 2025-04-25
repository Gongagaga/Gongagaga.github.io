<?php

namespace App\Controller;

use App\Form\ContactType;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class Home extends AbstractController
{
    #[Route('/', name: 'home')]
    public function home(): Response
    {

        return $this->render('home.html.twig');
    }

    #[Route('/formations', name: 'formations')]
    public function formations(): Response
    {

        return $this->render('formations.html.twig');
    }

    #[Route('/works', name: 'works')]
    public function works(): Response
    {

        return $this->render('works.html.twig');
    }

    #[Route('/works/{slug}', name: 'work_detail')]
    public function workDetail(string $slug): Response
    {

        $validSlugs = [
            'site-vitrine-illustratrice',
            'exercice-ecommerce',
            'mini-reseau-social',
            'event-planner',
            'mini-projets'
        ];

        if(!in_array($slug, $validSlugs)){
            return $this->render('works.html.twig');
        }

        return $this->render("works/work_{$slug}.html.twig");
    }

    // Téléchargement du CV
    #[Route('/download/{filename}', name: 'cv_download')]
    public function download(string $filename): BinaryFileResponse
    {
        // Vérifier si le fichier existe dans le répertoire 'public'
        $filePath = $this->getParameter('kernel.project_dir') . '/public/' . $filename;

        if (!file_exists($filePath)) {
            throw $this->createNotFoundException('Le fichier n\'existe pas.');
        }

        // Créer une réponse avec le fichier à télécharger
        return new BinaryFileResponse($filePath);
    }
}