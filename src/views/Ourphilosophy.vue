
<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import info from '@/components/info.vue';
  $(document).ready(function(){
    $('.number').each(function () {
      $(this).prop('Counter',0).animate({
        Counter: $(this).data('number')
      }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
  });
</script>
<template>
 <info />

<Navbar />
<!-- END nav -->


  <div class="overlay"></div>
  <div class="container">
    <div class="row no-gutters slider-text align-items-end justify-content-center">
      <div class="col-md-9  text-center mb-5">
        <h1 class="mb-2 bread">Our Philosophy</h1>
        <p class="breadcrumbs"><span class="mr-2"><a href="/">Home <i class="fa fa-chevron-right"></i></a></span> <span>About <i class="fa fa-chevron-right"></i></span></p>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="sidebar">
      <h2>Navigation</h2>
      <ul>
        <li><a href="https://www.tum.ac.ke/about/historical-background">Historical background</a></li>
        <li><a href="/ourphilosophy">Our Philosophy</a></li>
        <li><a href="/message">Librarians Message</a></li>
        <li><a href="#excellence">Excellence</a></li>
        <li><a href="#integrity">Integrity</a></li>
        <li><a href="#equity">Equity</a></li>
        <li><a href="#teamwork">Teamwork</a></li>
        <li><a href="#creativity">Creativity & Sustainability</a></li>
      </ul>
    </div>
    <div class="container">
      <h1>Mission, Vision, and Core Values</h1>

      <h2 id="mission">Mission</h2>
      <p>To advance knowledge and its practical application through teaching, research and innovation to serve both industry and the community.</p>

      <h2 id="vision">Vision</h2>
      <p>A Technical University of Global Excellence in Advancing Knowledge, Science and Technology.</p>

      <h2 id="core-values">Core Values</h2>
      <p>The Council, Senate, Management, staff and students of TUM will endeavor to institutionalize and inculcate values fostering a strong corporate culture while promoting quality service delivery, cohesion in our diverse community, and achieving the targeted goals. These will be realized by espousing the following values:</p>

      <h3 id="excellence">Excellence</h3>
      <p>We strive for excellence in quality teaching, learning and research, and customer focus by continuously assessing ourselves, applying our own and international benchmarks.</p>

      <h3 id="integrity">Integrity and Professionalism</h3>
      <p>We expect high standards of integrity, ethics and respect for one another across the institution and honor collegiality and a climate of critical professionalism among staff and students.</p>

      <h3 id="equity">Equity</h3>
      <p>We are committed to equity, diversity and fairness and seek to nurture and build on our diverse cultural heritage.</p>

      <h3 id="teamwork">Teamwork</h3>
      <p>We place a high premium on teamwork and shared responsibility in working with each other and with external groups in ways that are mutually beneficial.</p>

      <h3 id="creativity">Creativity, Innovativeness, and Environmental Sustainability</h3>
      <p>We embrace innovative problem solving and promote creative value-based solutions. We cultivate a socially secure, responsive, and sustainable green environment.</p>
    </div>
  </div>


<Footer />

<!-- loader -->
<!-- <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div> -->
  
</template>

<style>  .wrapper {
  display: flex;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto; /* Center the wrapper */
  justify-content: center; /* Center the flex items */
}
.sidebar {
  width: 250px;
  background-color: green;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-right: 20px; /* Add space between sidebar and content */
}
.sidebar h2 {
  font-size: 18px;
  margin-bottom: 15px; /* Increased margin for better separation */
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  margin: 0; /* Reset margin for the list */
}

.sidebar li {
  margin-bottom: 15px; /* Increased space between list items */
  padding: 5px 0; /* Add padding to the top and bottom of each list item */
}

.sidebar a {
  color: #fff;
  text-decoration: none;
  display: block; /* Make the entire area of the list item clickable */
  padding: 10px; /* Add padding to the link for a better clickable area */
  border-radius: 4px; /* Slightly round the corners for a smoother look */
}

.sidebar a:hover {
  text-decoration: underline;
  background-color: rgba(255, 255, 255, 0.2); /* Add a subtle background color on hover */
}

   
    

</style>
