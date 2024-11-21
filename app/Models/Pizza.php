<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pizza extends Model
{
    use HasFactory;


    protected $hidden = [
        'user'
    ];

    protected $guarded = [];

    protected $casts = [
        'toppings' => 'array'
    ];


    protected $appends = [
        'chef',
        'last_updated',
    ];

    public function chef()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function getChefAttribute()
    {
        return $this->user->name;
    }

    public function getLastUpdatedAttribute()
    {
        return $this->updated_at->diffForHumans();
    }
}
