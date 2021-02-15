<?php

namespace App\Http\Controllers;

use App\Models\Hiscore;
use Illuminate\Http\Request;

class HiscoreController extends Controller
{

    public function TopTenHiscores(Hiscore $Hiscore)
    {

        return $Hiscore->getTopTenScores();
    }


    public function myHighScores(Hiscore $Hiscore, $id)
    {

        return $Hiscore->getUserTopTen($id);

    }

    public function addMyScore(Hiscore $Hiscore, Request $Request, $id){

        $Hiscore->addScore($id, $Request['score']);

    }

    
}
