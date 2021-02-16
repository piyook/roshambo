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


    public function myBank(Hiscore $Hiscore, $id)
    {

        return $Hiscore->getBank($id);

    }

   

    
}
