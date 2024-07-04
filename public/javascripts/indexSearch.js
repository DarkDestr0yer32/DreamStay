// Function to handle search form submission
function handleSearch(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('search-input').value.toLowerCase().trim();
    const campgrounds = JSON.parse(document.getElementById('campgrounds-data').textContent);

    // Filter campgrounds based on search term
    const filteredCampgrounds = campgrounds.filter(campground => {
        return campground.title.toLowerCase().includes(searchTerm) || campground.location.toLowerCase().includes(searchTerm);
    });

    // Render filtered campgrounds
    renderCampgrounds(filteredCampgrounds);
}

function renderCampgrounds(campgrounds) {
    const campgroundList = document.getElementById('campground-list');
    campgroundList.innerHTML = '';

    if (campgrounds.length === 0) {
        const noResultsMessage = document.createElement('div');
        noResultsMessage.className = 'col-12 text-center mt-2 no-results-message';
        noResultsMessage.innerText = 'No results found. Please search again.';
        campgroundList.appendChild(noResultsMessage);
        return; // Exit function if no results found
    }

    campgrounds.forEach(campground => {
        const cardWrapper = document.createElement('div');
        cardWrapper.className = 'col-lg-4 col-md-6 col-sm-12 mb-4'; // Default size for medium screens

        if (campgrounds.length === 1) {
            cardWrapper.className = 'col-md-6 mb-4'; // Adjust for single campground
        }

        const card = document.createElement('div');
        card.className = 'card shadow-sm';
        card.innerHTML = `
            <div class="row no-gutters">
                <div class="col-md-12">
                    ${campground.images.length ? `<img class="card-img-top img-fluid" alt="" src="${campground.images[0].url}" style="max-height: 300px;">` : `<img class="card-img-top img-fluid" alt="" src="https://res.cloudinary.com/dlvpan240/image/upload/v1719955008/view5_iec6af.png" style="max-height: 300px;">`}
                </div>
                <div class="col-md-12">
                    <div class="card-body">
                        <h5 class="card-title">${campground.title}</h5>
                        <p class="card-text">${campground.description}</p>
                        <p class="card-text">
                            <small class="text-muted">${campground.location}</small>
                        </p>
                        <a class="btn btn-primary" href="/campgrounds/${campground._id}">View ${campground.title}</a>
                    </div>
                </div>
            </div>
        `;

        cardWrapper.appendChild(card);
        campgroundList.appendChild(cardWrapper);
    });
}



// Add event listener to search form
document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', handleSearch);
});
