<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Capsule extends Model
{
    use HasFactory;

    public function user() : BelongsTo{
        return $this->belongsTo(User::class);
    }

    public function tags() : BelongsToMany{
        return $this->belongsToMany(Tag::class);
    }
}
