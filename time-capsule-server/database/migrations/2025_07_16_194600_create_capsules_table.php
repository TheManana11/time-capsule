<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('capsules', function (Blueprint $table) {
            $table->id();
            $table->integer("user_id");
            $table->string("title");
            $table->text("message");
            $table->text("image_url");
            $table->text("audio_url");
            $table->ipAddress("ip_address");
            $table->string("country");
            $table->string("city");
            $table->decimal("latitude", total: 10, places: 8);
            $table->decimal("longitude", total: 11, places: 8);
            $table->enum("type", ["public", "private", "unlisted"])->default("public");
            $table->char("emoji");
            $table->string("color");
            $table->integer("views");
            $table->boolean("is_surprise");
            $table->dateTime("reveal_date");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('capsules');
    }
};
