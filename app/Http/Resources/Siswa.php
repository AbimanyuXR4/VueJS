<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Siswa extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'siswa_id' => $this->id,
            'name'
        ];
}