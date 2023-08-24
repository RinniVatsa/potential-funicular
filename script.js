function navigateToCountryPage(countryId) {
    window.location.href = 'country_details.html?country=' + countryId;
}

function navigateToCountryPage2(countryId) {
    window.location.href = 'country2.html?country=' + countryId;
}

function navigateToCountryPage2(countryId) {
    window.location.href = 'country2.html?country=' + countryId;
}

function navigateToCountryPage3(countryId) {
    window.location.href = 'country3.html?country=' + countryId;
}

function navigateToCountryPage4(countryId) {
    window.location.href = 'country4.html?country=' + countryId;
}

function navigateToCountryPage5(countryId) {
    window.location.href = 'country5.html?country=' + countryId;
}

function navigateToCountryPage7(countryId) {
    window.location.href = 'country7.html?country=' + countryId;
}

function navigateToCountryPage8(countryId) {
    window.location.href = 'country8.html?country=' + countryId;
}

function navigateToCountryPage9(countryId) {
    window.location.href = 'country9.html?country=' + countryId;
}

function navigateToCountryPage10(countryId) {
    window.location.href = 'country10.html?country=' + countryId;
}

function navigateToCountryPage11(countryId) {
    window.location.href = 'country11.html?country=' + countryId;
}






// const navbarToggle = navbar.querySelector("#navbar-toggle");
// const navbarMenu = document.querySelector("#navbar-menu");
// const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
// let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

// const toggleNavbarVisibility = () => {
//     isNavbarExpanded = !isNavbarExpanded;
//     navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
// };

// navbarToggle.addEventListener("click", toggleNavbarVisibility);

// navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
// navbarMenu.addEventListener("click", toggleNavbarVisibility);

// function showDetails(countryId) {
//     // Get the card's content
//     const card = document.getElementById(countryId);
//     const imgSrc = card.querySelector('img').src;
//     const countryName = card.querySelector('h2').textContent;

//     // Display the details in a new window or modal
//     const detailsWindow = window.open('', 'Country Details', 'width=400,height=300');
//     detailsWindow.document.body.innerHTML = `
//         <div class="details">
//             <img src="${imgSrc}" alt="${countryName}">
//             <h2>${countryName}</h2>
//         </div>
//     `;
// }




// // Define country details data
// const countryDetails = {
//     country1: {
//         name: "Country 1",
//         image: "country1.jpg",
//         phone: "+123456789",
//     },
//     // Add more country details here
// };

// // Get the button element
// const detailsButton = document.querySelector('.btn-primary');

// // Get the details section element
// const detailsSection = document.getElementById('detailsSection');

// // Add a click event listener to the button
// detailsButton.addEventListener('click', function() {
//     // Get the country ID from the button's data attribute
//     const countryId = this.getAttribute('data-country-id');
//     const details = countryDetails[countryId];

//     // Update the details section content
//     detailsSection.innerHTML = `
//         <div class="card">
//             <img src="${details.image}" class="card-img-top" alt="${details.name}">
//             <div class="card-body">
//                 <h5 class="card-title">${details.name} Details</h5>
//                 <p class="card-text">Phone: ${details.phone}</p>



//             </div>
//         </div>
//     `;
// });

// Get the button element


// // Get the table body element
// const detailsTableBody = document.getElementById('detailsTableBody');

// // Add a click event listener to the button
// detailsButton.addEventListener('click', function() {
//     // Get the country ID from the button's data attribute
//     const countryId = this.getAttribute('data-country-id');
//     const details = countryDetails[countryId];

//     // Generate a dummy OTP
//     const dummyOtp = Math.floor(Math.random() * 9000) + 1000;

//     // Create a new row in the table
//     const newRow = document.createElement('tr');
//     newRow.innerHTML = `
//         <td><img src="${details.image}" alt="${details.name}" class="country-image"></td>
//         <td>${details.name}</td>
//         <td>${details.phone}</td>
//         <td>${dummyOtp}</td>
//     `;

//     // Append the new row to the table body
//     detailsTableBody.appendChild(newRow);
// });