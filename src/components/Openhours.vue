<script setup>
// highlight current day on opening hours
$(document).ready(function () {
    $('.opening-hours li').eq(new Date().getDay()).addClass('today');
});
</script>

<template>

    <body>
        <div class="demo-bg">
            <div class="container" style="width: 85%; margin: auto;"> <!-- Container centered and set to 90% width -->
                <div class="row">
                    <div class="col-sm-8 d-flex align-items-center justify-content-center">
                        <p class="mb-0 text-white big-stylish-text text-center">
                            The Technical University of Mombasa is open to serve students, faculty, and visitors
                            during the following hours:
                        </p>
                    </div>
                    <div class="col-sm-4">
                        <div class="business-hours">
                            <h2 class="title">Opening Hours</h2>
                            <ul class="list-unstyled opening-hours">
                                <li>Sunday <span class="pull-right">Closed</span></li>
                                <li>Monday <span class="pull-right">9:00-22:00</span></li>
                                <li>Tuesday <span class="pull-right">9:00-22:00</span></li>
                                <li>Wednesday <span class="pull-right">9:00-22:00</span></li>
                                <li>Thursday <span class="pull-right">9:00-22:00</span></li>
                                <li>Friday <span class="pull-right">9:00-23:30</span></li>
                                <li>Saturday <span class="pull-right">14:00-23:30</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<style>
/* CSS */
.big-stylish-text {
    font-size: 32px;
    font-weight: bold;
    color: #ffffff;
    font-family: 'Playfair Display', serif;
    letter-spacing: 1px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    text-align: center;
}

.demo-bg {
    width: 100%;
    /* Set width to 90% */
    background: #087B3E;
    margin: 60px auto;
    /* Center the demo-bg */
    /* padding: 20px; */
    /* Optional padding for spacing */
}

.business-hours {
    background: #222;
    padding: 40px 14px;
    margin-top: -15px;
    position: relative;
}

.business-hours:before {
    content: '';
    width: 23px;
    height: 23px;
    background: #111;
    position: absolute;
    top: 5px;
    left: -12px;
    transform: rotate(-45deg);
    z-index: -1;
}

.business-hours .title {
    font-size: 20px;
    color: #BBB;
    text-transform: uppercase;
    padding-left: 5px;
    border-left: 4px solid #ffac0c;
}

.business-hours li {
    color: #888;
    line-height: 30px;
    border-bottom: 1px solid #333;
}

.business-hours li:last-child {
    border-bottom: none;
}

.business-hours .opening-hours li.today {
    color: #ffac0c;
}
</style>
