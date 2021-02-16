<?php

namespace App\Http\Controllers;
use App\Models\Hiscore;

use Illuminate\Http\Request;


class GameController extends Controller
{


    public function playGame(Request $request)
    {

      
        $userGuess = $request->input('userGuess');
        $userStake = $request->input('userStake');
        //user id from santum session - use to securely update db
        $userId = auth()->user()->id;

        $actions = [
            ["rock"],
            ["paper"],
            ["scissors"],
            ["lizard"],
            ["spock"],

        ];

        $randomAction = rand(0, 4);

        $apiGuess = $actions[$randomAction][0];

        $gameResult = $this->checkResult($apiGuess, $userGuess);

        array_push ($actions[$randomAction], $gameResult[0]);
        array_push ($actions[$randomAction], $gameResult[1]);


        $payload = json_decode(json_encode(
                                ['userId' => $userId,
                                'stake' =>  $userStake,
                                'result' => $gameResult[1]
                                ]));

        
        if ($this->isBankFundsLow($payload)) {
            //to do : need to return error : low funds to inform user
            
                    return json_encode(array([
                        "error"=>"no funds"
                    ]));
                    } 

        $this->updateBank($payload);

        return $actions[$randomAction];
    }

    protected function checkResult($apiGuess, $userGuess){

        $rules = [
            ["scissors", "paper", "Scissors Cuts Paper"],
            ["paper", "rock", "Paper Covers Rock"],
            ["rock", "lizard", "Rock Crushes Lizard"],
            ["lizard", "spock", "Lizard Poisons Spock"],
            ["spock", "scissors", "Spock Smashes Scissors"],
            ["scissors", "lizard","Scissors Stab Lizard"],
            ["lizard", "paper", "Lizard Eats Paper"],
            ["paper", "spock", "Paper Disproves Spock"],
            ["spock", "rock", "Spock Vaporizes Rock"],
            ["rock", "scissors", "Rock Blunts Scissors"],
        ];

        if ($apiGuess === $userGuess) { 
            return ["Its a Draw", "draw"];
        }


       foreach($rules as $scenario){
           
            if (in_array($apiGuess, $scenario)) {
                if (in_array($userGuess, $scenario)) {
                        //both api and user must have both these items - so which way round
                            if ( $scenario[0] === $apiGuess){
                                //api wins
                                return [$scenario[2], "lose"];
                            } else {
                                //user wins
                                return [$scenario[2], "win"];
                            }
                        }
                    }
       
    }

    }


    protected function updateBank($payload) {

        $Hiscore = new Hiscore;

        if ($payload->result === 'draw') {return;}

        if ($payload->result === 'lose') { $payload->stake = -$payload->stake; }

        $Hiscore->updateBank($payload->userId, $payload->stake);

    }

    protected function isBankFundsLow($payload ) {

        $Hiscore = new Hiscore;

        $bankFunds = $Hiscore->getBank($payload->userId);

        if ($bankFunds - $payload->stake <= 0 ) {
            return true;
        }
        return false;
    }

}
