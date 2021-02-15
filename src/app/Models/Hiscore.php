<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hiscore extends Model
{
    use HasFactory;

    public function getTopTenScores()
    {

        return $this
            ->join('users', 'users.id', '=', 'hiscores.userId')
            ->select('users.name', 'score', 'hiscores.created_at')
            ->orderByDesc('score')
            ->get();
    }

    public function addScore($id, $score)

    {
        $this->userId = $id;
        $this->score = $score;
        $this->save();
    }

    public function getUserTopTen($id)
    {
        return $this
            ->select('score','created_at')
            ->where('userId', '=', $id)
            ->orderByDesc('score')
            ->limit(10)
            ->get();
    }
}
