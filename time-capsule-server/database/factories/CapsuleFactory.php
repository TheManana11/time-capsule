<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Storage;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Capsule>
 */
class CapsuleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $imagePath = storage_path('app/public/images');
        $audioPath = storage_path('app/public/audios');

        $imageFiles = glob($imagePath . '/*.*'); 
        $audioFiles = glob($audioPath . '/*.*');


        $randomImageFullPath = $imageFiles[array_rand($imageFiles)];
        $randomAudioFullPath = $audioFiles[array_rand($audioFiles)];

        $randomImage = 'images/' . basename($randomImageFullPath);
        $randomAudio = 'audios/' . basename($randomAudioFullPath);
        
        return [
            'user_id' => fake()->numberBetween(1, 30), 
            'title' => fake()->sentence(5),
            'message' => fake()->realText(),
            'image_url' => $randomImage,
            'audio_url' => $randomAudio,
            'ip_address' => fake()->ipv4(),
            'country' => fake()->country(),
            'city' => fake()->city(),
            'latitude' => fake()->randomFloat(8, -90, 90),
            'longitude' => fake()->randomFloat(8, -180, 180),
            'type' => fake()->randomElement(['public', 'private', 'unlisted']),
            'emoji' => fake()->emoji(),
            'color' => fake()->safeHexColor(),
            'views' => fake()->numberBetween(0, 1000),
            'is_surprise' => fake()->boolean(),
            'reveal_date' => fake()->dateTimeBetween('-1 month', '+1 month')->format('Y-m-d'),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
