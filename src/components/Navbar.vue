<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute();

/**
 * Function to check if the current route matches the given path
 */
const isActive = (path) => computed(() => route.path.startsWith(path));
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
            <ul class="navbar-nav px-5">
                <li class="nav-item">
                    <router-link to="/" class="nav-link text-white pill-hover" active-class="active-link">
                        HOME
                    </router-link>
                </li>
                <li class="nav-item dropdown"
                    :class="{ 'active-link': isActive('/message').value || isActive('/discipline').value }">
                    <a class="nav-link dropdown-toggle text-white pill-hover" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        ABOUT US
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <router-link to="/message" class="dropdown-item">University Librarian's Message</router-link>
                        <router-link to="/discipline" class="dropdown-item">Discipline</router-link>
                    </div>
                </li>
                <li class="nav-item">
                    <router-link to="/noticeboard" class="nav-link text-white pill-hover" active-class="active-link">
                        ANNOUNCEMENTS
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/gallery" class="nav-link text-white pill-hover" active-class="active-link">
                        GALLERY
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/faqs" class="nav-link text-white pill-hover" active-class="active-link">
                        FAQS
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/downloads" class="nav-link text-white pill-hover" active-class="active-link">
                        DOWNLOADS
                    </router-link>
                </li>
                <li class="nav-item dropdown" :class="{ 'active-link': isActive('/Ourphilosophy').value }">
                    <a class="nav-link dropdown-toggle text-white pill-hover" href="#" id="navbarDropdownExamBank"
                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        EXAM BANK
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownExamBank">
                        <router-link to="/Ourphilosophy" class="dropdown-item">Our Philosophy</router-link>
                        <router-link to="/" class="dropdown-item">Historical Background</router-link>
                        <router-link to="/" class="dropdown-item">Governance Structure</router-link>
                        <router-link to="/" class="dropdown-item">Council Members</router-link>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
/* Active link styling */
.active-link {
    background-color: #087B3E !important;
    color: white !important;
    border-radius: 20px;
    font-weight: bolder;
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
