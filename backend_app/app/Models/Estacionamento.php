<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Estacionamento extends Model
{
    protected $fillable = [
        'user_id', 'nome', 'telefone', 'endereco', 'bairro', 'estado', 'cidade', 'latitude', 'longitude', 'vaga'
    ];
}
