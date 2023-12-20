<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    private $clientHTTP;

    public function __construct()
    {
        $this->clientHTTP = new Client();
    }

    public function index()
    {
        $urlAPI = "https://digi-api.com/api/v1/digimon?pageSize=20&page=0";

        $response = $this->clientHTTP->get($urlAPI);
        $datos = json_decode($response->getBody()->getContents());

        $digimons = $datos->content;
        $pagination = $datos->pageable;

        return Inertia::render('Dashboard', ["digimonsData" => $digimons, "pagination" => $pagination]);
    }
}
