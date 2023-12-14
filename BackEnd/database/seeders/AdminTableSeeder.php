<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class AdminTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('admins')->insert([
            [
                'name' => 'Tạ Việt Phương',
                'email' => 'phuongtv@uit.edu.vn',
                'password' => bcrypt('Phuongtv@admin123'),
                'user_type' => 'admin'
            ]
        ]);
    }
}
