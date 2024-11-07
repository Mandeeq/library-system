<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>
<template>
	<Navbar />
	<!-- END nav -->
	
	
		<div class="container">
			
				<div class="  text-center ">
					<h1 class="mb-2 bread">Discipline</h1>
					<p class="breadcrumbs text-center"><span class="mr-2"><a href="/">Home <i class="fa fa-chevron-right"></i></a></span> <span>Discipline <i class="fa fa-chevron-right"></i></span></p>
				</div>
			</div>
		
	
			<div class="text-center">
    <h2>Library Rules</h2>
    <ol>
      <li>Silence must be observed at all times. Use of mobile phones is prohibited. Please put them on vibration mode.</li>
      <li>Good order must be observed in the Library e.g. placing of feet on furniture, removal of shirts, wearing of caps, flip flops, and hats, eating or sleeping in the Library are forbidden.</li>
      <li>Smoking, eating, and the use of open fire in any part of the Library is prohibited.</li>
      <li>Cases, parcels, overcoats, etc., must be left in the baggage area.</li>
      <li>All users leaving the library carrying books or parcels must show them to the security.</li>
      <li>Stealing or attempting to steal book(s) or any other property is an offense, and those caught will be severely dealt with.</li>
      <li>Failure to observe the rules may earn suspension from use of the library.</li>
    </ol>
  </div>

<Footer />

		<!-- loader -->
		<!-- <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div> -->
</template>
<style>
 .text-center {
      text-align: center; /* Centers the text */
      font-family: Arial, sans-serif;
    }
    ol {
      display: inline-block; /* Aligns the list to the center */
      text-align: left; /* Keeps list items left-aligned for better readability */
      margin: 0 auto;
      padding-left: 20px;
    }
    li {
      margin-bottom: 10px;
    }
  

  </style>