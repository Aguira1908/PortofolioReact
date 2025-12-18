<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
  return inertia('Home');
});

Route::get('/proses', function () {
  return inertia('Proses');
});
