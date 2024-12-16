<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';


 </script>
 <template>
    <Navbar />
<div class="container my-4" style="max-width: 93%;" >
    <!-- Notes Section -->
    <div class="row" >
        <!-- Note Card -->
        <div class="col-md-4 mb-3">
            <div class="card shadow-sm">

                <div class="card-body">
                    <h5 class="card-title text-truncate">Book a Ticket for Movie</h5>
                    <p class="card-subtitle text-muted small">11 March 2009</p>
                    <p class="card-text text-muted mt-2">
                        Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.
                    </p>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-link p-0 text-warning">
                            <i class="fa fa-star"></i>
                        </button>
                        <div class="ml-auto">
                            <!-- Extra actions can go here -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Repeat Note Card for other notes -->
        <div class="col-md-4 mb-3">
            <div class="card shadow-sm">
                <div class="card-body">
                    <h5 class="card-title text-truncate">Go for Lunch</h5>
                    <p class="card-subtitle text-muted small">01 April 2002</p>
                    <p class="card-text text-muted mt-2">
                        Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.
                    </p>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-link p-0 text-warning">
                            <i class="fa fa-star"></i>
                        </button>
                        <div class="ml-auto">
                            <!-- Extra actions can go here -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Add more cards as necessary -->
         <div class="col-md-4 mb-3">
            <div class="card shadow-sm">
                <div class="card-body">
                    <h5 class="card-title text-truncate">Book a Ticket for Movie</h5>
                    <p class="card-subtitle text-muted small">11 March 2009</p>
                    <p class="card-text text-muted mt-2">
                        Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.
                    </p>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-link p-0 text-warning">
                            <i class="fa fa-star"></i>
                        </button>
                        <div class="ml-auto">
                            <!-- Extra actions can go here -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div class="col-md-4 mb-3">
            <div class="card shadow-sm">
                <div class="card-body">
                    <h5 class="card-title text-truncate">Book a Ticket for Movie</h5>
                    <p class="card-subtitle text-muted small">11 March 2009</p>
                    <p class="card-text text-muted mt-2">
                        Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.
                    </p>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-link p-0 text-warning">
                            <i class="fa fa-star"></i>
                        </button>
                        <div class="ml-auto">
                            <!-- Extra actions can go here -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div class="col-md-4 mb-3">
            <div class="card shadow-sm">
                <div class="card-body">
                    <h5 class="card-title text-truncate">Book a Ticket for Movie</h5>
                    <p class="card-subtitle text-muted small">11 March 2009</p>
                    <p class="card-text text-muted mt-2">
                        Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.
                    </p>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-link p-0 text-warning">
                            <i class="fa fa-star"></i>
                        </button>
                        <div class="ml-auto">
                            <!-- Extra actions can go here -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div class="col-md-4 mb-3">
            <div class="card shadow-sm">
                <div class="card-body">
                    <h5 class="card-title text-truncate">Book a Ticket for Movie</h5>
                    <p class="card-subtitle text-muted small">11 March 2009</p>
                    <p class="card-text text-muted mt-2">
                        Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.
                    </p>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-link p-0 text-warning">
                            <i class="fa fa-star"></i>
                        </button>
                        <div class="ml-auto">
                            <!-- Extra actions can go here -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal for Adding Notes -->
    <div class="modal fade" id="addnotesmodal" tabindex="-1" role="dialog" aria-labelledby="addnotesmodalTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header bg-info text-white">
                    <h5 class="modal-title">Add Notes</h5>
                    <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="addnotesmodalTitle">
                        <div class="form-group">
                            <label for="note-has-title">Note Title</label>
                            <input type="text" id="note-has-title" class="form-control" minlength="25" placeholder="Enter Title" />
                        </div>
                        <div class="form-group">
                            <label for="note-has-description">Note Description</label>
                            <textarea id="note-has-description" class="form-control" minlength="60" placeholder="Enter Description" rows="3"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-success" id="btn-n-save" style="display: none;">Save</button>
                    <button class="btn btn-danger" data-dismiss="modal">Discard</button>
                    <button class="btn btn-info" id="btn-n-add" disabled>Add</button>
                </div>
            </div>
        </div>
    </div>
</div>

<Footer />
 </template>
