<?php

namespace App\Http\Controllers;

use App\Models\Hiscore;
use Illuminate\Http\Request;

class HiscoreController extends Controller
{

    public function TopScores(Hiscore $Hiscore)
    {

        return $Hiscore->getTopScores();
    }


    public function myBank(Hiscore $Hiscore, $id)
    {

        return $Hiscore->getBank($id);

    }

    public function resetBank(Hiscore $Hiscore)
    {
        $userId = auth()->user()->id;

        $Hiscore->bankReset($userId);

    }
   

    
}
