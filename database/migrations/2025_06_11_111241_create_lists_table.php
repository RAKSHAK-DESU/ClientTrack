<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('lists', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('description')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('lists');
    }
};
/* 
return new class extends Migration
{
    
    public function up(): void
    {
        Schema::create('lists', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('description')->nullable();
            $table->boolean('is_completed')->default(false);
            $table->date('due_date')->nullable();
            $table->foreignId('list_id')->constrained()->OnDelete('cascade');
            $table->timestamps();
        });
    }

    
     public function down(): void
    {
        Schema::dropIfExists('lists');
    } 
};  */

 