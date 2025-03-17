<?php

namespace App\Controller;

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

    #[Route('/skills', name: 'skills')]
    public function skills(): Response
    {

        return $this->render('skills.html.twig');
    }

    #[Route('/works', name: 'works')]
    public function works(): Response
    {

        return $this->render('works.html.twig');
    }

    #[Route('/contact', name: 'contact')]
    public function contact(): Response
    {

        return $this->render('contact.html.twig');
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