<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

</script>
<template>
    <Navbar />
    <div class="bg-success">
  <div class="container">
    <div class="row no-gutters slider-text align-items-end justify-content-center">
      <div class="col-md-9  text-center mb-5">
        <h1 class="mb-2 bread">Our Gallery</h1>
        <p class="breadcrumbs text-center"><span class="mr-2"><a href="/">Home <i class="fa fa-chevron-right"></i></a></span> <span>Gallery<i class="fa fa-chevron-right"></i></span></p>
      </div>
    </div>
  </div>
  </div>

<div
  id="carouselMultiItemExample"
  data-mdb-carousel-init class="carousel slide carousel-dark text-center"
  data-mdb-ride="carousel"
>
  <!-- Controls -->
 <div class="d-flex justify-content-between align-items-center mb-4">
  <!-- Previous Button -->
  <button
    class="carousel-control-prev"
    type="button"
    data-mdb-target="#carouselMultiItemExample"
    data-mdb-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>

  <!-- Next Button -->
  <button
    class="carousel-control-next"
    type="button"
    data-mdb-target="#carouselMultiItemExample"
    data-mdb-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  <!-- Inner -->
  <div class="carousel-inner py-4">
    <!-- Single item -->
    <div class="carousel-item active">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="card">
              <img
             
                src="/images/image1.jpg"
                class="card-img-top"
                alt="Waterfall"
                style="height: 230px; "
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" data-mdb-ripple-init class="btn btn-success">VIEW MORE</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 d-none d-lg-block">
            <div class="card">
              <img
  src="/images/image2.jpg"
  class="card-img-top img-fluid img-thumbnail"
  alt="Sunset Over the Sea"
  style="height: 230px; "
/>

              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" data-mdb-ripple-init class="btn btn-success">VIEW MORE</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 d-none d-lg-block">
            <div class="card">
              <img
              src="/images/image3.jpg"
                class="card-img-top"
                alt="Sunset over the Sea"
                style="height: 230px; "
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" data-mdb-ripple-init class="btn btn-success">VIEW MORE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Single item -->
    <div class="carousel-item">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-12">
            <div class="card">
              <img
              src="/images/image4.jpg"
                class="card-img-top"
                alt="Fissure in Sandstone"
                style="height: 230px; "
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" data-mdb-ripple-init class="btn btn-success">VIEW MORE</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 d-none d-lg-block">
            <div class="card">
              <img
              src="/images/image4.jpg"
                class="card-img-top"
                alt="Storm Clouds"
                style="height: 230px; "
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" data-mdb-ripple-init class="btn btn-success">VIEW MORE</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 d-none d-lg-block">
            <div class="card">
              <img
              src="/images/image8.jpg"
                class="card-img-top"
                alt="Storm Clouds"
                style="height: 230px; "
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" data-mdb-ripple-init class="btn btn-success">VIEW MORE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Single item -->
    <div class="carousel-item">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <div class="card">
              <img
              src="/images/image9.jpg"
                class="card-img-top"
                alt="Storm Clouds"
                style="height: 230px; "
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" data-mdb-ripple-init class="btn btn-success">VIEW MORE</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
            <div class="card">
              <img
              src="/images/image10.jpg"
                class="card-img-top"
                alt="Storm Clouds"
                style="height: 230px; "
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" data-mdb-ripple-init class="btn btn-success">VIEW MORE</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
            <div class="card">
              <img
              src="/images/image11.jpg"
                class="card-img-top"
                alt="Storm Clouds"
                style="height: 230px; "
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" data-mdb-ripple-init class="btn btn-success">VIEW MORE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Inner -->
</div>
<!-- Carousel wrapper -->
<Footer />
</template>
<style>
.container{
    width:90%;
    max-width: 90%;

}
.carousel-control-prev-icon:after{
  content: "";
}
.carousel-control-next-icon:after{
  content: "";
}
</style>