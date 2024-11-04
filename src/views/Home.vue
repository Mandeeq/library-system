<script setup>
import { RouterLink } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import ReadMore from "@/components/ReadMore.vue";
import Events from '@/components/Events.vue';




</script>

<template>
    <Navbar />

    <section class="hero-wrap">



        <div class="home-slider owl-carousel js-fullheight ">
            <div class="slider-item js-fullheight " style="background-image:url(/images/tum.jpg);">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
                        <div class="col-md-12 ">
                            <div class="text w-100 mt-5 text-center">



                            </div>
                            <div class="container ">
                                <p class="custom-text">A four year plan to enhance your future making you a better
                                    person</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    </section>
    <section class="ftco-section ftco-no-pt ftco-no-pb bg-success mt-5"> <!-- Add mb-5 for margin-bottom -->
    <div class="container bg-success">
        <div class="row d-flex">
            <div class="col-md-6 d-flex">
                <div class="img img-2 w-100 mr-md-2" style="background-image: url(/images/tum16.jpg);"></div>
                <div class="img img-2 w-100 ml-md-2" style="background-image: url(/images/tum17.jpg);"></div>
            </div>
            <div class="col-md-6 makereservation p-4 p-md-5">
                <div class="heading-section mb-5">
                    <span class="subheading">This is our secrets</span>
                    <h2 class="mb-4">Transform with TUM
</h2>
                    <p>We value the need for transformational leadership to steer the University towards achieving our vision and mission and contribute towards the social and economic development of the country.

                    </p>
                    
                </div>
            </div>
        </div>
    </div>
</section>

    <section class="ftco-section bg-light">
        <div class="container">
            <div class="row justify-content-center mb-5 pb-2">
                <div class="col-md-7 text-center heading-section ">

                    <h2 class="mb-4">Latest News& Events</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-3 ">
                    <div class="staff">
                        <div class="img" style="background-image: url(/images/tum12.jpg);"></div>
                        <div class="text px-4 pt-2">
                            <ReadMore title="TUM Hosts a Public Lecture on Religion, Politics, and Human Rights"
                                :fullText="'On 31st October, Professor Erin Wilson from the University of Groningen, Netherlands, visited TUM, where she delivered a public lecture alongside representatives from both universities on the theme of “Religion, Politics, and Human Rights in the Contemporary World.” During this event, Prof. Erin Wilson, a Professor of Politics and Religion, presented on “Critical Approaches to Religion and World Politics.” At the same time, Dr. Manoela Carpenedo, Assistant Professor, conducted a virtual presentation on “Persecuted Beliefs: Afro-Diasporic Religions and the Right to Freedom of Religion or Belief (FoRB) in Latin America.” From TUM, Dr. Fathima Azmiya Badurdeen, a Postdoctoral Researcher, discussed “The Right to FoRB in Preventing Religious Intolerance in Communities: Kenya and Indonesia.” Dr. Godffrey Nato, Dean of Humanities and Social Sciences at the Technical University of Mombasa, moderated the engaging session. Faculty heads, lecturers, and students, particularly those majoring in Conflict and Security Studies, were in attendance. Some of the topics addressed during the session included secularism, international security, Freedom of Religion or Belief (FoRB), colonialism, politics, culture, religious intolerance and persecution, countering violent extremism, gender, and peace-building. Dr. Fathima also highlighted the JISRA (Joint Initiative for Strategic Religious Actions) research project, which aims to co-create strategies to advance the Right to Freedom of Religion or Belief (FoRB). The diverse perspectives shared by the speakers emphasized the significance of understanding and promoting the Right to Freedom of Religion or Belief (FoRB) as a crucial element in fostering peaceful coexistence and mitigating religious intolerance. By engaging in such critical dialogues, academic institutions can play a pivotal role in shaping policies and strategies that uphold human rights and contribute to a more inclusive society. The collaborative nature of the presentations and discussions reflected the commitment of both universities to advance knowledge and advocacy in this vital area.'"
                                :charLimit="250" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 ">
                    <div class="staff">
                        <div class="img" style="background-image: url(/images/tum11.jpg);"></div>
                        <div class="text px-4 pt-2">
                            <ReadMore
                                title="AWS Pwani User Group Hosts an Event on Next Generation Developer Experience at TUM"
                                :fullText="fullText" :charLimit="250" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 ">
                    <div class="staff">
                        <div class="img" style="background-image: url(/images/tum13.jpg);"></div>
                        <div class="text px-4 pt-2">
                            <ReadMore title="TUM hosts spectacular 2024 Cultural Week for Students"
                                :fullText="fullText1" :charLimit="250" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 ">
                    <div class="staff">
                        <div class="img" style="background-image: url(/images/tum14.jpg);"></div>
                        <div class="text px-4 pt-2">
                            <ReadMore
                                title="Search for Common Ground sign MOU with TUM for promoting peace in digital space"
                                :fullText="fullText2" :charLimit="250" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="ftco-section ftco-no-pt ftco-no-pb bg-success">
        <div class="container bg-success">
            <div class="row d-flex">
                <div class="col-md-6 d-flex" >
                    <div class="img img-2 w-100 mr-md-2" style="background-image: url(/images/tum20.jpeg);"></div>
                    <div class="img img-2 w-100 ml-md-2" style="background-image: url(/images/tum21.jpg);"></div>
                    
                </div>
                <div class="col-md-6 makereservation ">
                    <div class="heading-section mb-5">
                        
                        <h2 class="mb-4">Sports</h2>
                        <ReadMore
                                title="STUM bags medals at martial arts regional tournament"
                                :fullText="fullText3" :charLimit="250" />
                    </div>
                </div>
            </div>
           
        </div>
    </section>


    <section class="ftco-section bg-light">
    <div class="container">
        <div class="row justify-content-center mb-5 pb-2">
            <div class="col-md-7 text-center heading-section ftco-animate">
                <span class="subheading">Blog</span>
                <h2 class="mb-4">Recent Blog</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="blog-entry" style="width: 100%;"> <!-- Ensure blog entry uses 100% width -->
                    <Events />
                </div>
            </div>
            <div class="col-md-4">
                <div class="blog-entry" style="width: 100%;">
                    <h1>NOTICE BOARD</h1>
                    <div class="text px-0 pt-3 pb-4"> <!-- Adjusted padding -->
                        <div class="heading">
                            <template>
                                <div>
                                    <ReadMore 
                                        title="GRADUATION AWARD LIST FOR THE 11TH GRADUATION CEREMONY SCHEDULED DECEMBER 2024"
                                        :intro="'Click below to download the PDF of the award list.'"
                                        :fullText4="'/library/public/documents/1- TUM GRADUATION AWARD LIST FOR THE 11TH GRADUATION CEREMONY SCHEDULED DECEMBER 2024 -22102024.pdf'" 
                                        :charLimit="250" 
                                        class="small-text" 
                                    />
                                </div>
                            </template>
                            <ReadMore title="Advertisement for Internship Program - Finance" :fullText="fullText1" :charLimit="250" class="small-text" />
                            <ReadMore title="Advertisement for Internship Program - Procurement" :fullText="fullText1" :charLimit="250" class="small-text" />
                            <ReadMore title="Procedures For Online Room Booking" :fullText="fullText1" :charLimit="250" class="small-text" />
                            <ReadMore title="INSURANCE LETTERS MAY AUGUST 2024 BATCH 4" :fullText="fullText1" :charLimit="250" class="small-text" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="blog-entry" style="width: 100%;">
                    <h1>FEATURED</h1>
                    <div class="text px-0 pt-3 pb-4"> <!-- Adjusted padding -->
                        <div class="img" style="background-image: url(/images/tum23.jpg); height: 200px; width: 100%; background-size: cover; background-position: center;"></div>
                        <div class="meta">
                            <!-- Optional meta information can be added here -->
                        </div>
                        <h3 class="heading"><a href="#">TUM Soars Above Expectations in ISO 9001:2015 Second Surveillance Audit!</a></h3>
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
</style>
