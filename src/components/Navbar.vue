<template>
    <nav class="navbar navbar-expand-lg" style="background-color: #D99837;">
        <!-- Logo on the left -->
        <a class="navbar-brand logo px-5" href="#">
            <img src="/img/logot.png" alt="logo" class="" style="width: 60px;">
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Centered navigation links -->
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent" style="margin-left: 800px;">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link text-dark pill-hover" href="/" style="font-size: 1.2rem;">HOME</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-dark pill-hover" href="/about" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size: 1.2rem;">
                        ABOUT US
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="/Ourphilosophy" style="font-size: 16px;">Our Philosophy</a>
                        <a class="dropdown-item" href="/message" style="font-size: 16px;">University Librarian's Message</a>
                        <a class="dropdown-item" href="/discipline" style="font-size: 16px;">Discipline</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-dark pill-hover" href="/about" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size: 1.2rem;">
                        NEWS & EVENTS
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="/Ourphilosophy" style="font-size: 16px;">News</a>
                        <a class="dropdown-item" href="/noticeboard" style="font-size: 16px;">Notice Board</a>
                        <a class="dropdown-item" href="/message" style="font-size: 16px;">Events</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark pill-hover" href="/" style="font-size: 1.2rem;">GALLERY</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark pill-hover" href="fqas" style="font-size: 1.2rem;">FAQS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark pill-hover" href="/" style="font-size: 1.2rem;">DOWNLOADS</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-dark pill-hover" href="/about" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size: 1.2rem;">
                        EXAM BANK
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="/Ourphilosophy" style="font-size: 16px;">Our Philosophy</a>
                        <a class="dropdown-item" href="/" style="font-size: 16px;">Historical Background</a>
                        <a class="dropdown-item" href="/" style="font-size: 16px;">Governance Structure</a>
                        <a class="dropdown-item" href="/" style="font-size: 16px;">Council Members</a>
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
    background-color: #087B3E;
    color: white !important;
}

.navbar-toggler {
    color: black;
}
</style>
