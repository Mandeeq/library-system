<script setup>
// No additional script needed for styling
</script>

<template>
  <div
    id="carouselBasicExample"
    class="carousel slide carousel-fade"
    data-mdb-ride="carousel"
  >
    <!-- Indicators -->
    <div class="carousel-indicators">
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>

    <!-- Inner -->
    <div class="carousel-inner">
      <!-- Single item -->
      <div class="carousel-item active">
        <img
          src="/images/tum.jpg"
          class="d-block w-100 custom-carousel-image"
          alt="Sunset Over the City"
        />
        <div class="carousel-caption d-none d-md-block custom-carousel-caption">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>

      <!-- Single item -->
      <div class="carousel-item">
        <img
          src="/images/tumlib.jpg"
          class="d-block w-100 custom-carousel-image"
          alt="Canyon at Night"
        />
        <div class="carousel-caption d-none d-md-block custom-carousel-caption">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <!-- Single item -->
      <div class="carousel-item">
        <img
          src="/images/lib2.jpg"
          class="d-block w-100 custom-carousel-image"
          alt="Cliff Above a Stormy Sea"
        />
        <div class="carousel-caption d-none d-md-block custom-carousel-caption">
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </div>
    </div>
    <!-- Inner -->

    <!-- Controls -->
    <button
      class="carousel-control-prev"
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style scoped>
/* Custom styles to reduce the image height */
.custom-carousel-image {
  height: 900px; /* Adjust the height as needed */
  object-fit: cover; /* Ensures the image scales correctly within the container */
  filter: brightness(50%); /* Makes the image appear dull */
}

/* Custom styles for the caption text */
.custom-carousel-caption {
  color: white !important; /* Sets the text color to white */
}
</style>
