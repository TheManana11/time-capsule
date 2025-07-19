<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

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
        return [
            'user_id' => fake()->numberBetween(1, 30), 
            'title' => fake()->sentence(5),
            'message' => fake()->realText(),
            'image_url' => fake()->imageUrl(640, 480, 'nature'),
            'audio_url' => fake()->url(),
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
            'reveal_date' => fake()->dateTimeBetween('-10 month', '+10 month')->format('Y-m-d'),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
