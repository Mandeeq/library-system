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
    <section class="ftco-section bg-light full-width">
    <div class="row justify-content-center mb-5 pb-2">
        <div class="col-md-7 text-center heading-section">
            <h2 class="mb-4">E-BOOKS</h2>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 col-lg-3">
            <div class="staff">
                <div class="img" style="background-image: url(/images/bookboon.jpg);"></div>
                <div class="text px-4 pt-2">
                    <a href="http://bookboon.com/">bookboon E-Books</a>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-3">
            <div class="staff">
                <div class="img" style="background-image: url(/images/scholarText.jpg);"></div>
                <div class="text px-4 pt-2">
                    <a href="http://www.scholartext.com/">scholarTEXT</a>
                </div> </div>
        </div>
        <div class="col-md-6 col-lg-3">
            <div class="staff">
                <div class="img" style="background-image: url(/images/Britanicca.jpg);"></div>
                <div class="text px-4 pt-2">
                    <a href="https://tum.remotexs.co/user">Encyclopedia Britannica</a>
                </div> </div>
        </div>
        <div class="col-md-6 col-lg-3">
            <div class="staff">
                <div class="img" style="background-image: url(/images/Ebrary.jpg);"></div>
                <div class="text px-4 pt-2">
                    <a href="https://tum.remotexs.co/user">EBRARY</a>
                </div> </div>
        </div>
    </div>
</section>
<section class="ftco-section bg-light full-width-section">
    <div class="container-fluid">
        <div class="row justify-content-center mb-5 pb-2">
            <div class="col-md-7 text-center heading-section">
                <h2 class="mb-4">Latest News & Events</h2>
            </div>
        </div>
        <div class="row justify-content-center"> <!-- Center all items in the row -->
            <div class="col-md-6 col-lg-3 d-flex justify-content-center">
                <div class="staff text-center">
                    <div class="img" style="background-image: url(/images/tum12.jpg);"></div>
                    <div class="text px-4 pt-2">
                        <ReadMore title="TUM Hosts a Public Lecture on Religion, Politics, and Human Rights"
                            :fullText="'On 31st October, Professor Erin Wilson from the University of Groningen, Netherlands, visited TUM, where she delivered a public lecture alongside representatives from both universities on the theme of “Religion, Politics, and Human Rights in the Contemporary World.” ...'" 
                            :charLimit="250" />
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 d-flex justify-content-center">
                <div class="staff text-center">
                    <div class="img" style="background-image: url(/images/tum11.jpg);"></div>
                    <div class="text px-4 pt-2">
                        <ReadMore title="AWS Pwani User Group Hosts an Event on Next Generation Developer Experience at TUM"
                            :fullText="fullText" 
                            :charLimit="250" />
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 d-flex justify-content-center">
                <div class="staff text-center">
                    <div class="img" style="background-image: url(/images/tum13.jpg);"></div>
                    <div class="text px-4 pt-2">
                        <ReadMore title="TUM hosts spectacular 2024 Cultural Week for Students"
                            :fullText="fullText1" 
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
    <div class="text px-0 pt-3 pb-4 text-center"> <!-- Centered text -->
        <div class="heading text-center">
            <ReadMore 
                title="Advertisement for Internship Program - Finance" 
                :fullText="fullText1" 
                :charLimit="250" 
                class="small-text" 
            />
            <ReadMore 
                title="Advertisement for Internship Program - Procurement" 
                :fullText="fullText1" 
                :charLimit="250" 
                class="small-text" 
            />
            <ReadMore 
                title="Procedures For Online Room Booking" 
                :fullText="fullText1" 
                :charLimit="250" 
                class="small-text" 
            />
            <ReadMore 
                title="INSURANCE LETTERS MAY AUGUST 2024 BATCH 4" 
                :fullText="fullText1" 
                :charLimit="250" 
                class="small-text" 
            />
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
    height: 500px; /* Set a height as needed */
    background-size: cover; /* Cover the entire area */
    background-position: center; /* Center the background image */
}

.full-width .staff .text {
    text-align: center; /* Center text */
}
.text {
    font-size: 1.5rem; /* Increase the font size as needed */
}
.text a {
    font-size: 1.5rem; /* You can adjust this for the link specifically */
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
    height: 600px; /* Set height for the staff container */
}

.staff .img {
    height: 400px; /* Adjust height for images if needed */
    width: 100%; /* Full width image */
    background-size: cover; /* Cover the entire area */
    background-position: center; /* Center the background image */
}

.text {
    text-align: center; /* Center text content */
}



</style>
