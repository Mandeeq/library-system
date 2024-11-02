<script setup>
import { RouterLink } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Menu from './Menu.vue';
import info from '@/components/info.vue';

document.addEventListener("DOMContentLoaded", function() {
            function toggleReadMore() {
                const content = document.querySelector('.read-more-content');
                const toggleText = document.querySelector('.read-more-toggle');
                if (content.style.display === "none" || content.style.display === "") {
                    content.style.display = "block"; // Show the content
                    toggleText.textContent = "Read Less"; // Change to "Read Less"
                } else {
                    content.style.display = "none"; // Hide the content
                    toggleText.textContent = "Read More"; // Change back to "Read More"
                }
            }

            // Add event listener to the "Read More" text
            document.querySelector('.read-more-toggle').addEventListener('click', toggleReadMore);
        });

</script>

<template>

    <div class="wrapi">
        <img src="/img/logot.png">
        <div class="container">
            <div class="row justify-content-end">
                <div class="col-12 col-md d-flex align-items-end">
                    <p class="mb-0 phone"><span class="mailus">Phone no:</span> <a href="#">+254733955377</a> or <span
                            class="mailus">email us:</span> <a href="#">info@tum.ac.ke</a></p>
                    <p class="mb-0 phone"><span class="mailus">Physical address:</span> <a href="#">Tom Mboya Street
                            Tudor, Msa</a></p>
                </div>

            </div>
        </div>
    </div>




    <section class="hero-wrap">



        <div class="home-slider owl-carousel js-fullheight ">
            <div class="slider-item js-fullheight " style="background-image:url(/images/tum1.jpeg);">
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







    <section class="ftco-section bg-light">
        <div class="container">
            <div class="row justify-content-center mb-5 pb-2">
                <div class="col-md-7 text-center heading-section ">
                    <span class="subheading">Chef</span>
                    <h2 class="mb-4">Latest News& Events</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-3 ">
                    <div class="staff">
                        <div class="img" style="background-image: url(/images/tum12.jpg);"></div>
                        <div class="text px-4 pt-2">
                            <h3>TUM Hosts a Public Lecture on Religion, Politics, and Human Rights</h3>
                            <div class="read-more-container">
    <p class="read-more-intro">
        On 31st October, Professor Erin Wilson from the University of Groningen, Netherlands, visited TUM, where she delivered a public lecture alongside representatives from both universities on the theme of "Religion, Politics, and Human Rights in the Contemporary World." <span class="read-more-toggle" onclick="toggleReadMore()">Read More</span>
    </p>
    <div class="read-more-content">
        <p>During this event, Prof. Erin Wilson, a Professor of Politics and Religion, presented on "Critical Approaches to Religion and World Politics." At the same time, Dr. Manoela Carpenedo, Assistant Professor, conducted a virtual presentation on "Persecuted Beliefs: Afro-Diasporic Religions and the Right to Freedom of Religion or Belief (FoRB) in Latin America."</p>
        <p>From TUM, Dr. Fathima Azmiya Badurdeen, a Postdoctoral Researcher, discussed "The Right to FoRB in Preventing Religious Intolerance in Communities: Kenya and Indonesia." Dr. Godffrey Nato, Dean of Humanities and Social Sciences at the Technical University of Mombasa, moderated the engaging session. Faculty heads, lecturers, and students, particularly those majoring in Conflict and Security Studies, were in attendance.</p>
        <p>Some of the topics addressed during the session included secularism, international security, Freedom of Religion or Belief (FoRB), colonialism, politics, culture, religious intolerance and persecution, countering violent extremism, gender, and peace-building.</p>
        <p>Dr. Fathima also highlighted the JISRA (Joint Initiative for Strategic Religious Actions) research project, which aims to co-create strategies to advance the Right to Freedom of Religion or Belief (FoRB).</p>
        <p>The diverse perspectives shared by the speakers emphasized the significance of understanding and promoting the Right to Freedom of Religion or Belief (FoRB) as a crucial element in fostering peaceful coexistence and mitigating religious intolerance. By engaging in such critical dialogues, academic institutions can play a pivotal role in shaping policies and strategies that uphold human rights and contribute to a more inclusive society. The collaborative nature of the presentations and discussions reflected the commitment of both universities to advance knowledge and advocacy in this vital area.</p>
    </div>
</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 ">
                    <div class="staff">
                        <div class="img" style="background-image: url(/images/chef-2.jpg);"></div>
                        <div class="text px-4 pt-2">
                            <h3>Michelle Fraulen</h3>
                            <span class="position mb-2">Head Chef</span>
                            <div class="faded">
                                <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                                <ul class="ftco-social d-flex">
                                    <li class=""><a href="#"><span class="icon-twitter"></span></a></li>
                                    <li class=""><a href="#"><span class="icon-facebook"></span></a></li>
                                    <li class=""><a href="#"><span class="icon-google-plus"></span></a></li>
                                    <li class=""><a href="#"><span class="icon-instagram"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 ">
                    <div class="staff">
                        <div class="img" style="background-image: url(/images/chef-3.jpg);"></div>
                        <div class="text px-4 pt-2">
                            <h3>Alfred Smith</h3>
                            <span class="position mb-2">Chef Cook</span>
                            <div class="faded">
                                <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                                <ul class="ftco-social d-flex">
                                    <li class=""><a href="#"><span class="icon-twitter"></span></a></li>
                                    <li class=""><a href="#"><span class="icon-facebook"></span></a></li>
                                    <li class=""><a href="#"><span class="icon-google-plus"></span></a></li>
                                    <li class=""><a href="#"><span class="icon-instagram"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 ">
                    <div class="staff">
                        <div class="img" style="background-image: url(/images/chef-1.jpg);"></div>
                        <div class="text px-4 pt-2">
                            <h3>Antonio Santibanez</h3>
                            <span class="position mb-2">Chef Cook</span>
                            <div class="faded">
                                <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                                <ul class="ftco-social d-flex">
                                    <li class=""><a href="#"><span class="icon-twitter"></span></a></li>
                                    <li class=""><a href="#"><span class="icon-facebook"></span></a></li>
                                    <li class=""><a href="#"><span class="icon-google-plus"></span></a></li>
                                    <li class=""><a href="#"><span class="icon-instagram"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="ftco-section ftco-no-pt ftco-no-pb">
        <div class="container">
            <div class="row d-flex">
                <div class="col-md-6 d-flex">
                    <div class="img img-2 w-100 mr-md-2" style="background-image: url(/images/bg_6.jpg);"></div>
                    <div class="img img-2 w-100 ml-md-2" style="background-image: url(/images/bg_4.jpg);"></div>
                </div>
                <div class="col-md-6  makereservation p-4 p-md-5">
                    <div class="heading-section  mb-5">
                        <span class="subheading">This is our secrets</span>
                        <h2 class="mb-4">Perfect Ingredients</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                            Semantics, a large language ocean.
                        </p>
                        <p><a href="#" class="btn btn-primary">Learn more</a></p>
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
                <div class="col-md-4 ">
                    <div class="blog-entry">
                        <a href="blog-single.html" class="block-20"
                            style="background-image: url('/images/image_1.jpg');">
                        </a>
                        <div class="text px-4 pt-3 pb-4">
                            <div class="meta">
                                <div><a href="#">August 3, 2020</a></div>
                                <div><a href="#">Admin</a></div>
                            </div>
                            <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the
                                    blind texts</a></h3>
                            <p class="clearfix">
                                <a href="#" class="float-left read btn btn-primary">Read more</a>
                                <a href="#" class="float-right meta-chat"><span class="fa fa-comment"></span> 3</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 ">
                    <div class="blog-entry">
                        <a href="blog-single.html" class="block-20"
                            style="background-image: url('/images/image_2.jpg');">
                        </a>
                        <div class="text px-4 pt-3 pb-4">
                            <div class="meta">
                                <div><a href="#">August 3, 2020</a></div>
                                <div><a href="#">Admin</a></div>
                            </div>
                            <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the
                                    blind texts</a></h3>
                            <p class="clearfix">
                                <a href="#" class="float-left read btn btn-primary">Read more</a>
                                <a href="#" class="float-right meta-chat"><span class="fa fa-comment"></span> 3</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 ">
                    <div class="blog-entry">
                        <a href="blog-single.html" class="block-20"
                            style="background-image: url('/images/image_3.jpg');">
                        </a>
                        <div class="text px-4 pt-3 pb-4">
                            <div class="meta">
                                <div><a href="#">August 3, 2020</a></div>
                                <div><a href="#">Admin</a></div>
                            </div>
                            <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the
                                    blind texts</a></h3>
                            <p class="clearfix">
                                <a href="#" class="float-left read btn btn-primary">Read more</a>
                                <a href="#" class="float-right meta-chat"><span class="fa fa-comment"></span> 3</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="ftco-section ftco-no-pt ftco-no-pb ftco-intro bg-primary">
        <div class="container py-5">
            <div class="row py-2">
                <div class="col-md-12 text-center">
                    <h2>We Make Delicious &amp; Nutritious Food</h2>
                    <a href="#" class="btn btn-white btn-outline-white">Book A Table Now</a>
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
            position: absolute; /* Position the text over the image */
            bottom: 10px; /* Distance from the bottom */
            left: 10px; /* Distance from the left */
            background-color: rgba(0, 0, 0, 0.6); /* Semi-transparent background */
            color: white; /* Text color */
            padding: 5px 10px; /* Padding around the text */
            border-radius: 5px; /* Rounded corners */
            text-decoration: none; /* Remove underline */
        }

        .read-more:hover {
            background-color: rgba(0, 0, 0, 0.8); /* Darker background on hover */
        }
        .read-more-content {
            display: none; /* Hidden by default */
        }

        .read-more-toggle {
            color: blue;
            cursor: pointer;
            text-decoration: underline;
        }
</style>
