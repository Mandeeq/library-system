<script setup>
import { RouterLink } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import ReadMore from "@/components/ReadMore.vue";
import Events from '@/components/Events.vue';
import Hero from '@/components/Hero.vue';



</script>

<template>
    <Navbar />
    <Hero />
    <section class="ftco-section bg-light full-width-section move-up">
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-7 text-center heading-section">
                <h2 class="news">E-BOOKS</h2>
            </div>
        </div>
        <div class="row justify-content-center"> <!-- Center all items in the row -->
            <div class="col-md-6 col-lg-3 d-flex justify-content-center">
                <div class="staff text-center">
                    <div class="img" style="background-image: url(/images/bookboon.jpg); width: 90%;"></div>
                    <div class="text px-4 pt-2">
                        <a href="http://bookboon.com/" target="_blank">
                            Bookboon offers a vast selection of free and premium eBooks
                        </a>
                       
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 d-flex justify-content-center">
                <div class="staff text-center">
                    <div class="img" style="background-image: url(/images/Ebrary.jpg); width: 90%;"></div>
                    <div class="text px-4 pt-2">
                        <a href="https://tum.remotexs.co/user" target="_blank">
                          Ebrary library provides access to thousands of academic eBooks
                        </a>
                   
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 d-flex justify-content-center">
                <div class="staff text-center">
                    <div class="img" style="background-image: url(/images/Britanicca.jpg); width: 90%;"></div>
                    <div class="text px-4 pt-2">
                        <a href="https://tum.remotexs.co/user" target="_blank">
                            University of Mombasa Library Hosts Reading for Success Campaign
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 d-flex justify-content-center">
                <div class="staff text-center">
                    <div class="img" style="background-image: url(/images/scholarText.jpg); width: 90%;"></div>
                    <div class="text px-4 pt-2">
                        <a href="https://example.com/resource4" target="_blank">
                            Search for Common Ground signs MOU with TUM for promoting peace in digital space
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>




<section class="ftco-section bg-light full-width-section move-up">
    <div class="container-fluid">
        <div class="row justify-content-center ">
            <div class="col-md-7 text-center heading-section ">
                <h2 class="news mt-50">Latest News</h2>
            </div>
        </div>
        <div class="row justify-content-center"> <!-- Center all items in the row -->
            <div class="col-md-6 col-lg-3 d-flex justify-content-center">
                <div class="staff text-center">
                    <div class="img" style="background-image: url(/images/lib4.jpg);"></div>
                    <div class="text px-4 pt-2">
                        <ReadMore title="University of Mombasa Digital Library Expands Access to Global Resources"
                            :fullText="'On 31st October, Professor Erin Wilson from the University of Groningen, Netherlands, visited TUM, where she delivered a public lecture alongside representatives from both universities on the theme of “Religion, Politics, and Human Rights in the Contemporary World.” ...'" 
                            :charLimit="250" />
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 d-flex justify-content-center">
                <div class="staff text-center">
                    <div class="img" style="background-image: url(/images/lib3.jpg);"></div>
                    <div class="text px-4 pt-2">
                        <ReadMore title="Upcoming Workshops on Using E-Resources"
                            :fullText="fullText" 
                            :charLimit="250" />
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 d-flex justify-content-center">
                <div class="staff text-center">
                    <div class="img" style="background-image: url(/images/tum13.jpg);"></div>
                    <div class="text px-4 pt-2">
                        <ReadMore title="University of Mombasa Library Hosts Reading for Success Campaign":fullText="fullText1" 
                            
                            :charLimit="250" />
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 d-flex justify-content-center">
                <div class="staff text-center">
                    <div class="img" style="background-image: url(/images/tum14.jpg);"></div>
                    <div class="text px-4 pt-2">
                        <ReadMore title="Search for Common Ground sign MOU with TUM for promoting peace in digital space"
                            :fullText="fullText2" 
                            :charLimit="250" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="ftco-section bg-light" style="width: 90%; margin: 0 auto; padding: 0;"> <!-- Center the section and make it 90% of the page width -->
    <div class="container-fluid" style="padding: 0;"> <!-- Removed extra width settings -->
        <div class="row justify-content-center"> <!-- Center the row contents -->
            <!-- First Column -->
            <div class="col-md-4 d-flex justify-content-center"> <!-- Center the column contents -->
                <div class="blog-entry" style="width: 90%; text-align: center; color: black;"> <!-- Use 90% width, center text, and set text color to black -->
                    <Events />
                </div>
            </div>
            <!-- Second Column -->
            <div class="col-md-4 d-flex justify-content-center"> <!-- Center the column contents -->
                <div class="blog-entry" style="width: 90%; text-align: center; color: black;">
    <h1 class="text-center">NOTICE BOARD</h1> <!-- Centered heading -->
    <div class="card card-body">
                    <span class="side-stick"></span>
                    <h5 class="note-title text-truncate w-75 mb-0" data-noteheading="Book a Ticket for Movie">Book a Ticket for Movie <i class="point fa fa-circle ml-1 font-10"></i></h5>
                    <p class="note-date font-12 text-muted">11 March 2009</p>
                    <div class="note-content">
                        <p class="note-inner-content text-muted" data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.</p>
                    </div>
                    <div class="d-flex align-items-center">
                        <span class="mr-1"><i class="fa fa-star favourite-note"></i></span>
                        <span class="mr-1"><i class="fa fa-trash remove-note"></i></span>
                        <div class="ml-auto">
                            <div class="category-selector btn-group">
                                <a class="nav-link dropdown-toggle category-dropdown label-group p-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">
                                    <div class="category">
                                        <div class="category-business"></div>
                                        <div class="category-social"></div>
                                        <div class="category-important"></div>
                                        <span class="more-options text-dark"><i class="icon-options-vertical"></i></span>
                                    </div>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right category-menu">
                                    <a class="note-business badge-group-item badge-business dropdown-item position-relative category-business text-success" href="javascript:void(0);">
                                        <i class="mdi mdi-checkbox-blank-circle-outline mr-1"></i>Business
                                    </a>
                                    <a class="note-social badge-group-item badge-social dropdown-item position-relative category-social text-info" href="javascript:void(0);">
                                        <i class="mdi mdi-checkbox-blank-circle-outline mr-1"></i> Social
                                    </a>
                                    <a class="note-important badge-group-item badge-important dropdown-item position-relative category-important text-danger" href="javascript:void(0);">
                                        <i class="mdi mdi-checkbox-blank-circle-outline mr-1"></i> Important
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card card-body">
                    <span class="side-stick"></span>
                    <h5 class="note-title text-truncate w-75 mb-0" data-noteheading="Book a Ticket for Movie">Book a Ticket for Movie <i class="point fa fa-circle ml-1 font-10"></i></h5>
                    <p class="note-date font-12 text-muted">11 March 2009</p>
                    <div class="note-content">
                        <p class="note-inner-content text-muted" data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.</p>
                    </div>
                    <div class="d-flex align-items-center">
                        <span class="mr-1"><i class="fa fa-star favourite-note"></i></span>
                        <span class="mr-1"><i class="fa fa-trash remove-note"></i></span>
                        <div class="ml-auto">
                            <div class="category-selector btn-group">
                                <a class="nav-link dropdown-toggle category-dropdown label-group p-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">
                                    <div class="category">
                                        <div class="category-business"></div>
                                        <div class="category-social"></div>
                                        <div class="category-important"></div>
                                        <span class="more-options text-dark"><i class="icon-options-vertical"></i></span>
                                    </div>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right category-menu">
                                    <a class="note-business badge-group-item badge-business dropdown-item position-relative category-business text-success" href="javascript:void(0);">
                                        <i class="mdi mdi-checkbox-blank-circle-outline mr-1"></i>Business
                                    </a>
                                    <a class="note-social badge-group-item badge-social dropdown-item position-relative category-social text-info" href="javascript:void(0);">
                                        <i class="mdi mdi-checkbox-blank-circle-outline mr-1"></i> Social
                                    </a>
                                    <a class="note-important badge-group-item badge-important dropdown-item position-relative category-important text-danger" href="javascript:void(0);">
                                        <i class="mdi mdi-checkbox-blank-circle-outline mr-1"></i> Important
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
</div>


            </div>
            <!-- Third Column -->
            <div class="col-md-4 d-flex justify-content-center"> <!-- Center the column contents -->
                <div class="blog-entry" style="width: 90%; text-align: center; color: black;"> <!-- Use 90% width, center text, and set text color to black -->
                    <h1 class="text-center">FEATURED DATABASE</h1> <!-- Centered heading -->
                    <ul style="list-style-type: none; padding: 0; color: black; font-size: 18px;"> <!-- Set text color to black and increase text size -->
    <li style="margin-bottom: 10px;">
        <i class="fas fa-check" style="color: green; margin-right: 5px;"></i>
        <a href="http://kenyalaw.org/kl/" style="color: black;">Kenya Law Reports</a> <!-- Black link text -->
    </li>
    <li style="margin-bottom: 10px;">
        <i class="fas fa-check" style="color: green; margin-right: 5px;"></i>
        <a href="https://tum.remotexs.co/user" style="color: black;">EMERALD</a> <!-- Black link text -->
    </li>
    <li style="margin-bottom: 10px;">
        <i class="fas fa-check" style="color: green; margin-right: 5px;"></i>
        <a href="https://tum.remotexs.co/user" style="color: black;">Research4Life</a> <!-- Black link text -->
    </li>
    <li>
        <i class="fas fa-check" style="color: green; margin-right: 5px;"></i>
        <a href="https://tum.remotexs.co/user" style="color: black;">IEEE</a> <!-- Black link text -->
    </li>
</ul>

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
