<script setup>
</script>

<template>

<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: orange;">
  <!-- Navbar content -->

  <img src="/img/logot.png" style="margin-right: 500px;"> <!-- Adjust the margin value as needed -->

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item">
		<a class="nav-link white-text" href="/">HOME</a>
    </li>

	  <li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="/about" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    ABOUT US
  </a>
  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
    <a class="dropdown-item" href="/Ourphilosophy">Our Philosophy</a>
    <a class="dropdown-item" href="/message">University Librarian's Message</a>

  </div>
</li>
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="/about" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    NEWS $ EVENTS
  </a>
  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
    <a class="dropdown-item" href="/Ourphilosophy">News</a>
    <a class="dropdown-item" href="/message">Notice Board</a>
    <a class="dropdown-item" href="/message">Events</a>

  </div>
</li>
	  <li class="nav-item">
        <a class="nav-link" href="/">GALLERY</a>
      </li>
	  <li class="nav-item">
        <a class="nav-link" href="/">FAQS</a>
      </li>
	  <li class="nav-item">
        <a class="nav-link" href="/">DOWNLOADS</a>
      </li>
	  <li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="/about" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    EXAM BANK
  </a>
  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
    <a class="dropdown-item" href="/Ourphilosophy">Our Philosophy</a>
    <a class="dropdown-item" href="/contact">Historical Background</a>
	<a class="dropdown-item" href="/contact">Governance Stucture</a>
	<a class="dropdown-item" href="/contact">Council Members</a>
  </div>
</li>
     
	  
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>


</nav>

</template>