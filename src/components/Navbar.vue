<script setup>
// Your script setup code here if needed
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #fff">
    <!-- Logo on the left -->
    <a class="navbar-brand" href="#">
      <img src="/img/logot.png" width="50" height="40" alt="">
    </a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

    <!-- Centered navigation links -->
    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-dark pill-hover" href="/">HOME</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-dark pill-hover" href="/about" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            ABOUT US
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/Ourphilosophy">Our Philosophy</a>
            <a class="dropdown-item" href="/message">University Librarian's Message</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-dark pill-hover" href="/about" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            NEWS & EVENTS
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/Ourphilosophy">News</a>
            <a class="dropdown-item" href="/message">Notice Board</a>
            <a class="dropdown-item" href="/message">Events</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark pill-hover" href="/">GALLERY</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark pill-hover" href="/">FAQS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark pill-hover" href="/">DOWNLOADS</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-dark pill-hover" href="/about" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            EXAM BANK
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/Ourphilosophy">Our Philosophy</a>
            <a class="dropdown-item" href="/contact">Historical Background</a>
            <a class="dropdown-item" href="/contact">Governance Structure</a>
            <a class="dropdown-item" href="/contact">Council Members</a>
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
