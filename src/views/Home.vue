<script setup>
import { RouterLink } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import ReadMore from "@/components/ReadMore.vue";
import Events from '@/components/Events.vue';
import Hero from '@/components/Hero.vue';
import Openhours from '@/components/Openhours.vue';



</script>

<template>
    <Navbar />
    <Hero />
    <Openhours />
    <section class="ftco-section p-5 mt-5 ebooks">
  <div class="container-fluid">
    <!-- Section Heading -->
    <div class="row justify-content-center mb-4">
      <div class="col-md-12 text-center">
        <h2 class="news mt-0 text-primary">E-BOOKS</h2>
      </div>
    </div>

    <!-- Cards Section -->
    <div class="row justify-content-center">
      <!-- Card 1 -->
      <div class="col-md-6 col-lg-3 d-flex justify-content-center mb-4">
        <div class="card shadow-sm" style="width: 100%; height: 100%; border-radius: 8px;">
          <div
            class="img"
            style="background-image: url(/images/bookboon.jpg); background-size: cover; background-position: center; height: 200px;"
          ></div>
          <div class="card-body">
            <p class="fs-6 text-muted">
              Bookboon offers a vast selection of free and premium eBooks.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="col-md-6 col-lg-3 d-flex justify-content-center mb-4">
        <div class="card shadow-sm" style="width: 100%; height: 100%; border-radius: 8px;">
          <div
            class="img"
            style="background-image: url(/images/Ebrary.jpg); background-size: cover; background-position: center; height: 200px;"
          ></div>
          <div class="card-body">
            <p class="fs-6 text-muted">
              Ebrary library provides access to thousands of academic eBooks.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="col-md-6 col-lg-3 d-flex justify-content-center mb-4">
        <div class="card shadow-sm" style="width: 100%; height: 100%; border-radius: 8px;">
          <div
            class="img"
            style="background-image: url(/images/Britanicca.jpg); background-size: cover; background-position: center; height: 200px;"
          ></div>
          <div class="card-body">
            <p class="fs-6 text-muted">
              University of Mombasa Library Hosts Reading for Success Campaign.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="col-md-6 col-lg-3 d-flex justify-content-center mb-4">
        <div class="card shadow-sm" style="width: 100%; height: 100%; border-radius: 8px;">
          <div
            class="img"
            style="background-image: url(/images/scholarText.jpg); background-size: cover; background-position: center; height: 200px;"
          ></div>
          <div class="card-body">
            <p class="fs-6 text-muted">
              Search for Common Ground signs MOU with TUM for promoting peace in digital space.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>





<section class="ftco-section p-5 mt-5 ebooks">
    <div class="container-fluid">
        <!-- Section Heading -->
        <div class="row justify-content-center">
            <div class="col-md-7 text-center heading-section">
                <h2 class="news mt-0 mb-5 text-primary">LATEST NEWS</h2>
            </div>
        </div>

        <!-- News Cards Section -->
        <div class="row justify-content-center">
            <!-- Card 1 -->
            <div class="col-md-6 col-lg-3 d-flex justify-content-center mb-4">
                <div class="card shadow-sm text-center border-0" style="width: 100%; border-radius: 8px;">
                    <div class="img" style="background-image: url(/images/lib4.jpg); background-size: cover; background-position: center; height: 200px;"></div>
                    <div class="card-body">
                        <p class="fs-6 text-muted">University of Mombasa Digital Library Expands Access to Global Resources</p>
                    </div>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="col-md-6 col-lg-3 d-flex justify-content-center mb-4">
                <div class="card shadow-sm text-center border-0" style="width: 100%; border-radius: 8px;">
                    <div class="img" style="background-image: url(/images/lib3.jpg); background-size: cover; background-position: center; height: 200px;"></div>
                    <div class="card-body">
                        <p class="fs-6 text-muted">Upcoming Workshops on Using E-Resources</p>
                    </div>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="col-md-6 col-lg-3 d-flex justify-content-center mb-4">
                <div class="card shadow-sm text-center border-0" style="width: 100%; border-radius: 8px;">
                    <div class="img" style="background-image: url(/images/tum13.jpg); background-size: cover; background-position: center; height: 200px;"></div>
                    <div class="card-body">
                        <p class="fs-6 text-muted">University of Mombasa Library Hosts Reading for Success Campaign</p>
                    </div>
                </div>
            </div>

            <!-- Card 4 -->
            <div class="col-md-6 col-lg-3 d-flex justify-content-center mb-4">
                <div class="card shadow-sm text-center border-0" style="width: 100%; border-radius: 8px;">
                    <div class="img" style="background-image: url(/images/tum14.jpg); background-size: cover; background-position: center; height: 200px;"></div>
                    <div class="card-body">
                        <p class="fs-6 text-muted">Search for Common Ground Signs MOU with TUM for Promoting Peace in Digital Space</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="ebooks p-5 mt-5" style="width: 100%; margin: auto; padding: 0; display: flex; justify-content: center;">
    <div class="" style="width: 97%; text-align: center; color: black;">
        <h1 class="text-center">NOTICE BOARD</h1> <!-- Centered heading -->

        <!-- First Card -->
        <div class="card card-body" style="margin-bottom: 20px;">
            <span class="side-stick"></span>
            <h5 class="note-title text-truncate w-100 mb-0" data-noteheading="Book a Ticket for Movie">
                Book a Ticket for Movie 
            </h5>
            <p class="note-date font-12 text-muted">11 November 2024</p>
            <div class="note-content">
                <p class="note-inner-content text-muted" data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">
                    Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.
                </p>
            </div>
            <div class="d-flex align-items-center justify-content-center">
                <span class="mr-1"><i class="fa fa-star favourite-note"></i></span>
               
                <div class="ml-auto">
                    <div class="category-selector btn-group">
                       
                       
                    </div>
                </div>
            </div>
        </div>

        <!-- Duplicate the card as needed -->
        <div class="card card-body" style="margin-bottom: 20px;">
            <span class="side-stick"></span>
            <h5 class="note-title text-truncate w-100 mb-0" data-noteheading="Book a Ticket for Movie">
                Book a Ticket for Movie 
            </h5>
            <p class="note-date font-12 text-muted">11 November 2024</p>
            <div class="note-content">
                <p class="note-inner-content text-muted" data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">
                    Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.
                </p>
            </div>
            <div class="d-flex align-items-center justify-content-center">
                <span class="mr-1"><i class="fa fa-star favourite-note"></i></span>
                
                <div class="ml-auto">
                    <div class="category-selector btn-group">
                        
                       
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>




    <Footer />


    <!-- loader -->
    <!-- <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px">
            <circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" />
            <circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10"
                stroke="#F96D00" />
        </svg></div> -->


</template>

<style>
.ebooks{
    background-color: #EEEEEE;
}



.grey-card:hover {
    transform: translateY(-5px); /* Lift effect on hover */
}

.img {
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 200px; /* Fixed height for images */
    border-radius: 5px;
    margin-bottom: 10px;
}

.text {
    font-size: 16px;
    color: #333;
}

.text a {
    color: #333;
    text-decoration: none;
    font-weight: bold;
}

.text a:hover {
    color: #555; /* Dark grey on hover */
}
.grey-card {
    background-color: #f8f9fa; /* Light grey background */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for card effect */
    transition: transform 0.3s;
    width: 90%; /* 90% width of the column */
}

.grey-card:hover {
    transform: translateY(-5px); /* Slight lift effect on hover */
}

.img {
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 200px; /* Fixed height for image */
    border-radius: 5px;
}

.text a {
    text-decoration: none;
    font-weight: bold;
}

.text a:hover {
    color: #007bff; /* Hover color for link */
}
.news{margin-top: -100px;}


.read-more {
    position: absolute;
    /* Position the text over the image */
    bottom: 10px;
    /* Distance from the bottom */
    left: 10px;
    /* Distance from the left */
    background-color: rgba(0, 0, 0, 0.6);
    /* Semi-transparent background */
    color: white;
    /* Text color */
    padding: 5px 10px;
    /* Padding around the text */
    border-radius: 5px;
    /* Rounded corners */
    text-decoration: none;
    /* Remove underline */
}

.read-more:hover {
    background-color: rgba(0, 0, 0, 0.8);
    /* Darker background on hover */
}

.read-more-content {
    display: none;
    /* Hidden by default */
}

.read-more-toggle {
    color: blue;
    cursor: pointer;
    text-decoration: underline;
    font-size: 16px;
}
.full-width {
    width: 90%;
    padding-left: 0;
    padding-right: 0;
    margin: 0 auto; /* Center the section */
}

.full-width .staff {
    display: flex;
    flex-direction: column; /* Stack elements vertically */
    align-items: center; /* Center items horizontally */
}

.full-width .staff .img {
    width: 90%; /* Ensure the image container is 90% of the parent width */
    height: 400px; /* Set a height as needed */
    background-size: cover; /* Cover the entire area */
    background-position: center; /* Center the background image */
}

.full-width .staff .text {
    text-align: center; /* Center text */
}
.text {
    font-size: 1rem; /* Increase the font size as needed */
}
.text a {
    font-size: 1rem; /* You can adjust this for the link specifically */
    color: #000; /* Change color if necessary */
    text-decoration: none; /* Remove underline if desired */
}

.full-width-section {
    width: 90%; /* Set section to 90% width */
    margin: 0 auto; /* Center the section on the page */
}

.staff {
    display: flex;
    flex-direction: column; /* Stack image and text vertically */
    align-items: center; /* Center contents horizontally */
    height: 400px; /* Set height for the staff container */
}

.staff .img {
    height: 400px; /* Adjust height for images if needed */
    width: 80%; /* Full width image */
    background-size: cover; /* Cover the entire area */
    background-position: center; /* Center the background image */
    align-items: center;
}

.text {
    text-align: center; /* Center text content */
}

@media (min-width: 768px) {
  .text, .heading-section h2, .blog-entry h1, .small-text {
    font-size: 1.5rem; /* Slightly larger for tablets */
  }
}

@media (min-width: 1024px) {
  .text, .heading-section h2, .blog-entry h1, .small-text {
    font-size: 1.75rem; /* Larger for desktops */
  }
}

</style>
