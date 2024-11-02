<script setup>
</script>

<template>

<nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
		<div class="container">
			<RouterLink class="navbar-brand" to="/">Taste.<span>it</span></RouterLink>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="oi oi-menu"></span> Menu
			</button>

			<div class="collapse navbar-collapse" id="ftco-nav">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item"><RouterLink to="/" class="nav-link">Home</RouterLink></li>
					<li class="nav-item"><RouterLink to="/about" class="nav-link">About</RouterLink></li>
					<li class="nav-item"><RouterLink to="/chef" class="nav-link">Chef</RouterLink></li>
					<li class="nav-item active"><RouterLink to="/menu" class="nav-link">Menu</RouterLink></li>
					<li class="nav-item"><RouterLink to="/reservation" class="nav-link">Reservation</RouterLink></li>
					<li class="nav-item"><RouterLink to="/blog" class="nav-link">Blog</RouterLink></li>
					<li class="nav-item"><RouterLink to="/contact" class="nav-link">Contact</RouterLink></li>
				</ul>
			</div>
		</div>
	</nav>

</template>