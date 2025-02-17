<script setup>
import { onMounted } from 'vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';


</script>

<template>
    <Navbar />
    <section class="events-cont">
        <div class="bg-success">
            <div class="containers">
                <div class="row no-gutters slider-text align-items-end justify-content-center">
                    <div class="col-md-9  text-center mb-5">
                        <h1 class="mb-2 bread">EVENTS</h1>
                        <p class="breadcrumbs text-center"><span class="mr-2"><a href="/">Home <i
                                        class="fa fa-chevron-right"></i></a></span> <span>Events <i
                                    class="fa fa-chevron-right"></i></span></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="chat_container">
                        <div class="job-box">
                            <div class="job-box-filter">
                                <div class="row">


                                </div>
                            </div>
                            <div class="inbox-message">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <div class="message-avatar">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="">
                                            </div>
                                            <div class="message-body">
                                                <div class="message-body-heading">
                                                    <h1>UPCOMING WORKSHOPS </h1>

                                                </div>
                                                <p>
    Discover a world of knowledge and inspiration at our upcoming library events! From engaging book readings and author meet-and-greets to educational workshops and fun community activities, there's something for everyone. Join us and be part of a vibrant learning community that celebrates books, culture, and lifelong education.
</p>

                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="message-avatar">
                                                <img src="/images/tum17.jpg" alt="">
                                            </div>
                                            <div class="message-body">
                                                <div class="message-body-heading">
                                                    <h1 class="mb-2 bread">Author Spotlight Series</h1>
                                                </div>
                                               
<p>
    Meet renowned authors as they share their creative journeys, discuss their works, and answer your questions. 
    Don't miss this opportunity to connect with your favorite writers and gain insights into the world of literature.
</p>

                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="message-avatar">
                                                <img src="/images/lib3.jpg" alt="">
                                            </div>
                                            <div class="message-body">
                                                <div class="message-body-heading">
                                                    <h1 class="mb-2 bread">Tech and Innovation Workshops</h1>
                                                </div>
                                               
<p>
    Dive into the latest trends in technology and innovation. From coding basics to digital design, 
    these workshops are perfect for learners of all ages eager to embrace the digital future.
</p>

                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="message-avatar">
                                                <img src="/images/tum19.jpg" alt="">
                                            </div>
                                            <div class="message-body">
                                                <div class="message-body-heading">
                                                    <h1 class="mb-2 bread">Local History Exhibition</h1>

                                                </div>
                                              
<p>
    Step back in time with our curated exhibition on local history. Discover fascinating stories, 
    rare artifacts, and photographs that bring the past to life and celebrate our community's heritage.
</p>

                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="message-avatar">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="">
                                            </div>
                                            <div class="message-body">
                                                <div class="message-body-heading">
                                                    <h1 class="mb-2 bread">Poetry Slam Night</h1>

                                                </div>
                                              
<p>
    Celebrate the art of spoken word at our Poetry Slam Night! Enjoy captivating performances from talented poets 
    or showcase your own creativity in this lively and supportive environment.
</p>

                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="message-avatar">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="">
                                            </div>
                                            <div class="message-body">
                                                <div class="message-body-heading">
                                                    <h1 class="mb-2 bread">Sustainable Living Series</h1>

                                                </div>
                                                
<p>
    Learn practical tips for eco-friendly living with our Sustainable Living Series. From workshops on recycling to 
    gardening tutorials, join us in promoting a greener and more sustainable community.
</p>

                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="message-avatar">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="">
                                            </div>
                                            <div class="message-body">
                                                <div class="message-body-heading">
                                                    <h1 class="mb-2 bread">Local History Exhibition</h1>

                                                </div>
                                              
<p>
    Step back in time with our curated exhibition on local history. Discover fascinating stories, 
    rare artifacts, and photographs that bring the past to life and celebrate our community's heritage.
</p>

                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</template>





<style scoped>
.container {
    width: 100% !important; /* Covers 90% of the page width */
    max-width: 100%;        /* Ensures it doesn't exceed 90% on larger screens */
    margin: 0 auto;        /* Centers the container */

    justify-content: center; /* Centers child elements horizontally */
    align-items: center; /* Centers child elements vertically */
   margin-left: 300px;
   
    
}


body {
    margin-top: 20px;
    background-color: #eee;
}

/*================================
Filter Box Style
====================================*/
.job-box-filter label {
    width: 100%;
}

.job-box-filter select.input-sm {
    display: inline-block;
    max-width: 120px;
    margin: 0 5px;
    border: 1px solid #e8eef1;
    border-radius: 2px;
    height: 34px;
    font-size: 15px;
}

.job-box-filter label input.form-control {
    max-width: 200px;
    display: inline-block;
    border: 1px solid #e8eef1;
    border-radius: 2px;
    height: 34px;
    margin-left: 5px;
    font-size: 15px;
}

.text-right {
    text-align: right;
}

.job-box-filter {
    padding: 12px 15px;
    background: #ffffff;
    border-bottom: 1px solid #e8eef1;
    margin-bottom: 20px;
}

.job-box {
    background: #ffffff;
    display: inline-block;
    width: 100%;
    padding: 0 0px 40px 0px;
    border: 1px solid #e8eef1;
}

.job-box-filter a.filtsec {
    margin-top: 8px;
    display: inline-block;
    margin-right: 15px;
    padding: 4px 10px;
    font-family: 'Quicksand', sans-serif;
    transition: all ease 0.4s;
    background: #edf0f3;
    border-radius: 50px;
    font-size: 13px;
    color: #81a0b1;
    border: 1px solid #e2e8ef;
}

.job-box-filter a.filtsec.active {
    color: #ffffff;
    background: #16262c;
    border-color: #16262c;
}

.job-box-filter a.filtsec i {
    color: #03A9F4;
    margin-right: 5px;
}

.job-box-filter a.filtsec:hover,
.job-box-filter a.filtsec:focus {
    color: #ffffff;
    background: #07b107;
    border-color: #07b107;
}

.job-box-filter a.filtsec:hover i,
.job-box-filter a.filtsec:focus i {
    color: #ffffff;
}

.job-box-filter h4 i {
    margin-right: 10px;
}

/*=====================================
Inbox Message Style
=======================================*/
.inbox-message ul {
    padding: 0;
    margin: 0;
}

.inbox-message ul li {
    list-style: none;
    position: relative;
    padding: 15px 20px;
    border-bottom: 1px solid #e8eef1;
}

.inbox-message ul li:hover,
.inbox-message ul li:focus {
    background: #eff6f9;
}

.inbox-message .message-avatar {
    position: absolute;
    left: 30px;
    top: 50%;
    transform: translateY(-50%);
}

.message-avatar img {
    display: inline-block;
    width: 54px;
    height: 54px;
    border-radius: 50%;
}

.inbox-message .message-body {
    margin-left: 85px;
    font-size: 15px;
    color: #62748F;
}

.message-body-heading h5 {
    font-weight: 600;
    display: inline-block;
    color:black;
    margin: 0 0 7px 0;
    padding: 0;
}

.message-body h5 span {
    border-radius: 50px;
    line-height: 14px;
    font-size: 12px;
    color: #fff;
    font-style: normal;
    padding: 4px 10px;
    margin-left: 5px;
    margin-top: -5px;
}

.message-body h5 span.unread {
    background: #07b107;
}

.message-body h5 span.important {
    background: #dd2027;
}

.message-body h5 span.pending {
    background: #2196f3;
}

.message-body-heading span {
    float: right;
    color: #62748F;
    font-size: 14px;
}

.messages-inbox .message-body p {
    margin: 0;
    padding: 0;
    line-height: 27px;
    font-size: 15px;
}

a:hover {
    text-decoration: none;
}
</style>