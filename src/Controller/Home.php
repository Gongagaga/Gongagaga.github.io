<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
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
}