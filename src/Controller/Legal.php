<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class Legal extends AbstractController
{
    #[Route('/Mentions-legales', name: 'legal')]
    public function legal(): Response
    {

        return $this->render('mentions.html.twig');
    }
}