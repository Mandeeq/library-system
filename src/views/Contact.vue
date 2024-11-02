<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

</script>
<template>
    <body>

<div class="wrap">
  <div class="container">
   <div class="row justify-content-between">
    <div class="col-12 col-md d-flex align-items-center">
     <p class="mb-0 phone"><span class="mailus">Phone no:</span> <a href="#">+00 1234 567</a> or <span class="mailus">email us:</span> <a href="#">emailsample@email.com</a></p>
   </div>
   <div class="col-12 col-md d-flex justify-content-md-end">
     <p class="mb-0">Mon - Fri / 9:00-21:00, Sat - Sun / 10:00-20:00</p>
     <div class="social-media">
      <p class="mb-0 d-flex">
        <a href="#" class="d-flex align-items-center justify-content-center"><span>
                                <font-awesome-icon :icon="['fab', 'facebook']" /><i class="sr-only">Facebook</i></span></a>
                            <a href="#" class="d-flex align-items-center justify-content-center"><span>
                                <font-awesome-icon :icon="['fab', 'twitter']" /><i class="sr-only">Twitter</i></span></a>
                            <a href="#" class="d-flex align-items-center justify-content-center"><span>
                                <font-awesome-icon :icon="['fab', 'instagram']" /><i class="sr-only">Instagram</i></span></a>
     </p>
   </div>
 </div>
</div>
</div>
</div>
<Navbar />
<!-- END nav -->

<section class="hero-wrap hero-wrap-2" style="background-image: url('images/bg_5.jpg');" data-stellar-background-ratio="0.5">
 <div class="overlay"></div>
 <div class="container">
   <div class="row no-gutters slider-text align-items-end justify-content-center">
     <div class="col-md-9  text-center mb-5">
       <h1 class="mb-2 bread">Contact us</h1>
       <p class="breadcrumbs"><span class="mr-2"><a href="/">Home <i class="fa fa-chevron-right"></i></a></span> <span>Contact us <i class="fa fa-chevron-right"></i></span></p>
     </div>
   </div>
 </div>
</section>

<section class="ftco-section contact-section bg-light">
 <div class="container">
   <div class="row d-flex contact-info">
     <div class="col-md-12">
       <h2 class="h4 font-weight-bold">Contact Information</h2>
     </div>
     <div class="w-100"></div>
     <div class="col-md-3 d-flex">
      <div class="dbox">
        <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
      </div>
    </div>
    <div class="col-md-3 d-flex">
      <div class="dbox">
        <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
      </div>
    </div>
    <div class="col-md-3 d-flex">
      <div class="dbox">
        <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
      </div>
    </div>
    <div class="col-md-3 d-flex">
      <div class="dbox">
        <p><span>Website</span> <a href="#">yoursite.com</a></p>
      </div>
    </div>
  </div>
</div>
</section>
<section class="ftco-section ftco-no-pt contact-section">
<div class="container">
 <div class="row d-flex align-items-stretch no-gutters">
  <div class="col-md-6 p-5 order-md-last">
   <h2 class="h4 mb-5 font-weight-bold">Contact Us</h2>
   <form action="#">
     <div class="form-group">
       <input type="text" class="form-control" placeholder="Your Name">
     </div>
     <div class="form-group">
       <input type="text" class="form-control" placeholder="Your Email">
     </div>
     <div class="form-group">
       <input type="text" class="form-control" placeholder="Subject">
     </div>
     <div class="form-group">
       <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
     </div>
     <div class="form-group">
       <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5">
     </div>
   </form>
 </div>
 <div class="col-md-6 d-flex align-items-stretch">
   <div id="map"></div>
 </div>
</div>
</div>
</section>
<Footer />


<!-- loader -->
<!-- <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div> -->



</body>
</template>