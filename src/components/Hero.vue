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

    <!-- Inner Carousel Slides -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="/images/tum.jpg"
          class="d-block w-100 custom-carousel-image"
          alt="Sunset Over the City"
        />
        <div class="carousel-caption-bottom">
          <h5>Empowering Future Innovators</h5>
          <p>Technical University of Mombasa: Where Knowledge Meets Innovation.</p>
        </div>
      </div>

      <div class="carousel-item">
        <img
          src="/images/tumlib.jpg"
          class="d-block w-100 custom-carousel-image"
          alt="Canyon at Night"
        />
        <div class="carousel-caption-bottom">
          <h5>Building Tomorrow's Leaders Today</h5>
          <p>Committed to Academic Excellence and Professional Development</p>
        </div>
      </div>

      <div class="carousel-item">
        <img
          src="/images/lib2.jpg"
          class="d-block w-100 custom-carousel-image"
          alt="Cliff Above a Stormy Sea"
        />
        <div class="carousel-caption-bottom">
          <h5>Your Journey to Excellence Begins Here</h5>
          <p>Fostering Skills and Competencies for a Dynamic World</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Responsive image styling */
.custom-carousel-image {
  width: 100%;
  height: 60vh; /* Sets the height to a responsive viewport height */
  object-fit: cover; /* Scales image to fit within its container */
  filter: brightness(90%); /* Adds a dark overlay for better text contrast */
}

/* Bottom caption styling */
.carousel-caption-bottom {
  position: absolute;
  bottom: 10%; /* Positions caption at the bottom of the carousel */
  width: 100%; /* Makes the caption span the full width */
  background-color: rgba(3, 3, 3, 0.5); /* Semi-transparent white background */
  color: white; /* Black text for contrast on white background */
  padding: 15px;
  text-align: center;
}

.carousel-caption-bottom h5 {
  font-size: 1.9rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: aliceblue;
  font-family: 'Poppins', sans-serif;
}

.carousel-caption-bottom p {
  font-size: 1.3rem;
  margin: 0;
  color: aliceblue;
  text-align: center;
}

@media (max-width: 768px) {
  /* Adjust font sizes for smaller screens */
  .carousel-caption-bottom h5 {
    font-size: 1.3rem;
  }
  .carousel-caption-bottom p {
    font-size: 0.9rem;
  }
}

@media (min-width: 992px) {
  /* Adjust the carousel height for larger screens */
  .custom-carousel-image {
    height: 75vh; /* Increased height for larger displays */
  }
}
</style>
