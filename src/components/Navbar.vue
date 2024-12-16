<script setup>
import { computed } from 'vue'
/**
 * Computed function to check if the current path is active.
 * Uses window.location.pathname to match against the link path.
 */
const isActive = (path) => {
    return computed(() => window.location.pathname === path)
}
</script>
<template>
    <nav class="navbar navbar-expand-lg sticky-top" style="background-color: #D99837;">
        <!-- Logo on the left -->
        <a class="navbar-brand logo px-4 ms-5" href="#">
    <img src="/img/logot.png" alt="logo" class="logo-image" style="width: 60px;">
</a>


        <!-- Toggler for mobile view -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar links container -->
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav px-5 ">
                <li class=" ">
                    <a class="nav-link text-white pill-hover" href="/" style="font-size: 1rem;">HOME</a>
                </li>
                <li class=" dropdown">
                    <a class="nav-link dropdown-toggle text-white pill-hover" href="/about" id="navbarDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        style="font-size: 1rem;">
                        ABOUT US
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                       
                        <a class="dropdown-item" href="/message" style="font-size: 0.9rem;">University Librarian's
                            Message</a>
                        <a class="dropdown-item" href="/discipline" style="font-size: 0.9rem;">Discipline</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white pill-hover" href="/noticeboard" style="font-size: 1rem;">ANNOUNCEMENTS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white pill-hover" href="/gallery" style="font-size: 1rem;">GALLERY</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white pill-hover" href="faqs" style="font-size: 1rem;">FAQS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white pill-hover" href="/" style="font-size: 1rem;">DOWNLOADS</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-white pill-hover" href="/about" id="navbarDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        style="font-size: 1rem;">
                        EXAM BANK
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="/Ourphilosophy" style="font-size: 0.9rem;">Our Philosophy</a>
                        <a class="dropdown-item" href="/" style="font-size: 0.9rem;">Historical Background</a>
                        <a class="dropdown-item" href="/" style="font-size: 0.9rem;">Governance Structure</a>
                        <a class="dropdown-item" href="/" style="font-size: 0.9rem;">Council Members</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
/* Navbar logo styling */
.logo-image {
    width: 60px;
}




/* Link hover and pill style */
.pill-hover {
    border-radius: 20px;
    transition: background-color 0.3s, color 0.3s;
}

.pill-hover:hover {
    background-color: #087B3E;
    color: white !important;
}

/* Navbar-toggler styling */
.navbar-toggler {
    border: none;
}

.navbar-toggler-icon {
    background-color: gray;
}

/* Dropdown menu style */
.dropdown-menu .dropdown-item {
    color: black;
    transition: color 0.3s, background-color 0.3s;
}

.dropdown-menu .dropdown-item:hover {
    background-color: #087B3E;
    color: white;
}
</style>
