<script setup>
// Your script setup code here if needed
</script>

<template>
<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #D99837;">
    <!-- Logo on the left -->
    <a class="navbar-brand" href="#">
        <img src="/img/logot.png" width="90" height="60" alt="">
    </a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Centered navigation links -->
    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link text-dark pill-hover" href="/" style="font-size: 32px;">HOME</a> <!-- Increased font size -->
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-dark pill-hover" href="/about" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size: 32px;">
                    ABOUT US
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/Ourphilosophy" style="font-size: 16px;">Our Philosophy</a> <!-- Increased font size -->
                    <a class="dropdown-item" href="/message" style="font-size: 16px;">University Librarian's Message</a> <!-- Increased font size -->
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-dark pill-hover" href="/about" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size: 32px;">
                    NEWS & EVENTS
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/Ourphilosophy" style="font-size: 16px;">News</a> <!-- Increased font size -->
                    <a class="dropdown-item" href="/message" style="font-size: 16px;">Notice Board</a> <!-- Increased font size -->
                    <a class="dropdown-item" href="/message" style="font-size: 16px;">Events</a> <!-- Increased font size -->
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark pill-hover" href="/" style="font-size: 32px;">GALLERY</a> <!-- Increased font size -->
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark pill-hover" href="/" style="font-size: 32px;">FAQS</a> <!-- Increased font size -->
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark pill-hover" href="/" style="font-size: 32px;">DOWNLOADS</a> <!-- Increased font size -->
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-dark pill-hover" href="/about" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size: 32px;">
                    EXAM BANK
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/Ourphilosophy" style="font-size: 16px;">Our Philosophy</a> <!-- Increased font size -->
                    <a class="dropdown-item" href="/contact" style="font-size: 16px;">Historical Background</a> <!-- Increased font size -->
                    <a class="dropdown-item" href="/contact" style="font-size: 16px;">Governance Structure</a> <!-- Increased font size -->
                    <a class="dropdown-item" href="/contact" style="font-size: 16px;">Council Members</a> <!-- Increased font size -->
                </div>
            </li>
        </ul>
    </div>
</nav>

</template>

<style scoped>
.pill-hover {

  display: inline-block;
  padding: 5px 15px;
  border-radius: 50px;
  transition: background-color 0.3s;
}

.pill-hover:hover {

  background-color: #087B3E; /* Green color */
  color: white !important; /* Text color on hover */
}

.toggler{
  color:black;
}

.navbar-toggler {
  color: black; /* Ensure the text and icon are black */
}


</style>
