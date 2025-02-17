<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { ref } from 'vue';

const noticeboard = ref([
    {
        title: 'Book a Ticket for Movie',
        date: '11 March 2009',
        content: ' Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis',
    },
    {
        title: 'Book a Ticket for Movie',
        date: '11 March 2009',
        content: ' Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis',
    },
    {
        title: 'Book a Ticket for Movie',
        date: '11 March 2009',
        content: ' Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis',
    },
    {
        title: 'Go for Lunch',
        date: '01 April 2002',
        content: '  Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.',
    },
    {
        title: 'Book a Ticket for Movie',
        date: '11 March 2009',
        content: 'Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.',
    },
    {
        title: 'Book a Ticket for Movie',
        date: '6 January 2025',
        content: 'Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.',
    },
    {
        title: 'Book a Ticket for Movie',
        date: '5 January 2025',
        content: 'Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.',
    },
    {
        title: 'Book a Ticket for Movie',
        date: '4 January 2025',
        content: 'Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.',
    },

])


</script>
<template>
    <Navbar />
    <div class="container my-4" style="max-width: 93%;">
        <!-- Notes Section -->
        <div class="row">
            <!-- cards v-for -->
            <div v-for="(card, index) in noticeboard" :key="index"
                class="col-md-6 col-lg-3 d-flex justify-content-center mb-4">
                <div class="card shadow-sm" style="width: 100%; height: 100%; border-radius: 8px;">

                    <div class="card-body">
                        <h5>{{ card.title }}</h5>
                        <p>{{ card.date }}</p>
                        <p class="fs-6 text-muted">
                            {{ card.content }}

                        </p>
                        <i class="fa fa-star"></i>
                    </div>
                </div>
            </div>

        </div>



    </div>

    <Footer />
</template>
