<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class ActionController extends Controller
{


    public function getRandomAction()
    {

        $actions = [
            ['rock', 'url1'],
            ["paper", "url2"],
            ["scissors", "url3"],
            ["lizard", "url4"],
            ["spock", "url5"]

        ];

        $randomAction = rand(0, 4);

        return $actions[$randomAction];
    }
}
