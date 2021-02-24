<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hiscore extends Model
{
    use HasFactory;

    public function getTopScores()
    {

        return $this
            ->join('users', 'users.id', '=', 'hiscores.userId')
            ->select('users.name', 'score', 'hiscores.created_at')
            ->orderByDesc('score')
            ->limit(5)
            ->get();
    }

    public function createUserBank($id){

            $this->upsert([
                'userId' => $id,
                'score' => 100
            ], ['userId'], ['score']);

    }


    public function getBank($id)
    {
        $bankFunds =  $this
            ->select('score','created_at')
            ->where('userId', '=', $id)
            ->get();

            return $bankFunds[0]->score;
    }

    public function updateBank($userId, $userStake){
            
        $bankFunds = $this->select('score')->where('userId', '=', $userId)->get();

        $newBankFunds = ($bankFunds[0]->score) + $userStake ;

        if ($newBankFunds < 0) {return;}
        
        $bank = Hiscore::where('userId',$userId);
        $bank->update(["score"=>$newBankFunds]);
    }

    public function bankReset($userId){

        $bank = Hiscore::where('userId',$userId);
        $bank->update(["score"=>100]);
    }
}
