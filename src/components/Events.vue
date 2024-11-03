<script setup>
import { onMounted } from 'vue';

// Event data array
const events = [
    { date: '10', month: 'Mar', name: 'Music Festival', time: '06:00pm - 11:30pm', location: 'Central Park, NYC' },
    { date: '15', month: 'Mar', name: 'Food & Wine Expo', time: '12:00pm - 08:00pm', location: 'Exhibition Center, Paris' },
    { date: '20', month: 'Mar', name: 'Tech Conference 2024', time: '09:00am - 05:00pm', location: 'Silicon Valley' },
    { date: '25', month: 'Mar', name: 'Art Gala Night', time: '07:00pm - 10:00pm', location: 'Modern Art Museum, London' },
    { date: '02', month: 'Apr', name: 'Charity Run', time: '07:30am - 12:00pm', location: 'Bondi Beach, Sydney' },
    { date: '08', month: 'Apr', name: 'Spring Fashion Show', time: '05:00pm - 09:00pm', location: 'Fashion Avenue, Milan' },
    { date: '12', month: 'Apr', name: 'DJ Night with Armin Van Buuren', time: '10:00pm - 02:00am', location: 'Paradise Club, Ibiza' }
];

// Scroll logic for the event container
onMounted(() => {
    const scrollContainer = document.querySelector('.scroll-container');
    let scrollAmount = 0;
    setInterval(() => {
        if (scrollContainer) {
            scrollAmount += 1;
            scrollContainer.scrollTop = scrollAmount;
            if (scrollAmount >= scrollContainer.scrollHeight - scrollContainer.clientHeight) {
                scrollAmount = 0; // Reset to top for continuous scroll
            }
        }
    }, 50); // Adjust speed as needed
});
</script>

<template>
    <Navbar />
    <section class="events-cont">
        <h1>Events</h1>
        <div class="scroll-container">
            <div class="row">
                <article v-for="(event, index) in events" :key="index" class="card fl-left">
                    <section class="date">
                        <!-- Corrected datetime attribute -->
                        <time :datetime="event.date + ' ' + event.month">
                            <span>{{ event.date }}</span><span>{{ event.month }}</span>
                        </time>
                    </section>
                    <section class="card-cont">
                        <h3>{{ event.name }}</h3>
                        <div class="even-date">
                            <i class="fas fa-clock"></i> <!-- Clock Icon -->
                            <time>
                                <span>{{ event.time }}</span>
                            </time>
                        </div>
                        <div class="even-info">
                            <i class="fas fa-map-marker-alt"></i> <!-- Location Icon -->
                            <p>{{ event.location }}</p>
                        </div>
                        <RouterLink to="#" class="view-event-link">
                            View Event <i class="fas fa-arrow-right"></i> <!-- Right Arrow Icon -->
                        </RouterLink>
                    </section>
                </article>
            </div>
        </div>
    </section>
    <Footer />
</template>





<style scoped>
.events-cont {
    width: 50%;
}
/* 
.fl-left {
    float: left
} */

h1 {
    text-transform: uppercase;
    font-weight: 900;
    border-left: 10px solid #fff;
    padding-left: 10px;
    margin-bottom: 30px
}

.scroll-container {
    margin: 40px;
    max-height: 50vh;
    /* Show only the first 4 cards based on your card height */
    overflow-y: hidden;
    position: relative;
    width: 100%;
    flex-direction: column;
}

.row {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    /* Align items vertically */
    align-items: flex-start;
    /* Center cards horizontally within the row */
    gap: 20px;
    /* Add spacing between cards */
    margin: 0 auto;
    overflow: hidden;
    width: 100%;
    /* animation: scroll 50s linear infinite; */

}

.card {
    display: table-row;
    width: 90%;
    background-color: #fff;
    color: #000;
    margin-bottom: 10px;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    border-radius: 5px;
    position: relative;
    /* border: 1px dotted #097B3E */
}

.card:hover {
    transform: scale(1.02);
    /* Add subtle hover effect */
}


.card {
    margin-left: 2%
}

.date {
    display: table-cell;
    background: #fff !important;
    min-width: 30%;
    color: #000;
    position: relative;
    text-align: center;
    background: #fff;
    border: 2px solid #097B3E;
}
/* 
.date:after {
    top: auto;
    bottom: -15px
} */

.date time {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%)
}

.date time span {
    display: block
}

.date time span:first-child {
    color: #097B3E;
    font-weight: 600;
    font-size: 250%
}

.date time span:last-child {
    text-transform: uppercase;
    font-weight: 600;
    margin-top: -10px
}

.card-cont {
    display: table-cell;
    width: 90%;
    font-size: 90%;
    padding: 10px 10px 30px 50px
}

.card-cont h3 {
    color: #3C3C3C;
    font-size: 130%
}

.card-cont>div {
    display: table-row
}

.card-cont .even-date i,
.card-cont .even-info i,
.card-cont .even-date time,
.card-cont .even-info p {
    display: table-cell
}

.card-cont .even-date i,
.card-cont .even-info i {
    padding: 5% 5% 0 0
}

.card-cont .even-info p {
    padding: 30px 50px 0 0
}

.card-cont .even-date time span {
    display: block
}

.view-event-link {
    margin-top: 10px; /* Space above the link */
    display: inline-block;
    color: #097B3E;
    background-color: #fff;
    font-size: 80%;
    font-weight: 600;
    text-transform: uppercase;
    padding: 5px 10px;
    text-align: center;
    line-height: normal;
}

.even-date i,
.even-info i {
    margin-right: 10px !important; /* Space between icon and text */
    color: #097B3E; /* Change icon color to match theme */
}

.view-event-link i {
    margin-left: 5px; /* Space between text and right arrow */
}


@media screen and (max-width: 860px) {
    .card {
        display: block;
        float: none;
        width: 100%;
        margin-bottom: 10px
    }

    .card+.card {
        margin-left: 0
    }

    .card-cont .even-date,
    .card-cont .even-info {
        font-size: 75%
    }
}
</style>