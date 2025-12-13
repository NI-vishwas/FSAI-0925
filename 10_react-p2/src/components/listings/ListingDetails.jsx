import { useState } from "react";
import { useParams } from "react-router"
import listings from "../services/api/data";

export default function ListingDetails(){
    const { listingId } = useParams();
    const listingData = listings.map(a => a.id == listingId) 
    const [listing, setListing] = useState(listingData);

return (
        <div class="container my-5">
        <h1 class="mb-4 text-center">{listing.title}</h1>
        <div class="row">
            <div class="col-md-6 order-md-1 order-2">
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title text-primary">$1,800 / month</h5>
                        <h6 class="card-subtitle mb-3 text-muted">Downtown City, CA</h6>

                        <p>Experience the best of city living in this beautifully designed urban loft. Located in the heart of the downtown district, it offers breathtaking views of the city skyline. Perfect for singles or couples looking for a vibrant lifestyle.</p>

                        <h5 class="mt-4 mb-3">Key Features</h5>
                        <ul class="list-group list-group-flush mb-3">
                            <li class="list-group-item">
                                <i class="bi bi-door-open me-2"></i> Bedrooms: <span class="badge bg-secondary">1</span>
                            </li>
                            <li class="list-group-item">
                                <i class="bi bi-droplet me-2"></i> Bathrooms: <span class="badge bg-secondary">1</span>
                            </li>
                            <li class="list-group-item">
                                <i class="bi bi-house me-2"></i> Area: <span class="badge bg-secondary">850 sq ft</span>
                            </li>
                            <li class="list-group-item">
                                <i class="bi bi-calendar me-2"></i> Posted: <span class="badge bg-secondary">10/26/2023</span>
                            </li>
                        </ul>

                        <h5 class="mt-4 mb-3">Amenities</h5>
                        <div class="d-flex flex-wrap gap-2 mb-4">
                            <span class="badge bg-info text-dark p-2">Hardwood Floors</span>
                            <span class="badge bg-info text-dark p-2">In-unit Laundry</span>
                            <span class="badge bg-info text-dark p-2">Central Air</span>
                            <span class="badge bg-info text-dark p-2">Gym Access</span>
                            <span class="badge bg-info text-dark p-2">Pet-Friendly</span>
                        </div>

                        <div class="d-grid gap-2">
                            <button class="btn btn-success btn-lg">
                                <i class="bi bi-envelope me-2"></i> Contact Agent
                            </button>
                            <button class="btn btn-outline-primary btn-sm">
                                <i class="bi bi-heart me-2"></i> Add to Favorites
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6 order-md-2 order-1 mb-4">
                <div class="card">
                    <img src="house1.jpg" class="card-img-top" alt="Cozy Urban Loft with Skyline View" style="object-fit: cover; max-height: 450px;"/>
                    <div class="card-body">
                        <p class="card-text text-muted text-center">Image for: Cozy Urban Loft with Skyline View</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}