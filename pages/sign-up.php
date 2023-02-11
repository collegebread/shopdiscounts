<?php
  $pageTitle = "Sign Up | Receive Exclusive Offers";
?>

<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg==" crossorigin="anonymous" />
    <link rel="stylesheet" href="forms.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
    <title><?php echo $pageTitle; ?></title>

    <script type='text/javascript' src='..\js\forms.js'></script>
    <script>
      //toggle sign-up password visibility
    </script>

    <style>
    </style>
  </head>
  <body>
    <div class="import-form">
      <div class="top-header">
        <a href="../index.html" class="top-brand">Dealhunter</a>
         <h1 class="top-cta"> Spend Less at check out with coupon discounts & exclusive offers from top brands </h1>
        <div class="ad-banner">
          <p class="import-cache010">Simply the single greatest shopping app.</p>
        </div>
      </div>
      <div class="signup-form">
        <h1>SIGN UP</h1>
        <p>Make an account to receive alerts, additional discounts, & more</p>
        <form>
          <div class="form-section">
            <label class="email-input" for="email">Email address</label>
            <input type="text" id="email" name="username">
            <label class="password-input" for="password">Password</label>
            <div class="password-container">
              <input type="password" id="password" name="password">
              <button type="button" onclick="togglePasswordVisibility()"><i id="eye-slash" class="fas fa-eye-slash"></i></button>
            </div>
            <input type="checkbox" id="remember-me" name="remember-me">
            <label class="store-cookie" for="remember-me">Remember me?</label>
            <button type="submit">Continue with Email</button>  
            </div>
          <div class
