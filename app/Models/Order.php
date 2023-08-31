<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_code',
        'quantity',
        'gross_amount',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function products()
    {
        return $this->belongsTo(Products::class);
    }

    public function course()
    {
        return $this->hasOne(Course::class);
    }

    public function orderHistory()
    {
        return $this->hasMany(OrderHistory::class);
    }
}
