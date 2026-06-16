// Welcome Message
console.log("Welcome to TravelX Landing Page");

// Hero Button Click
function goToFeatures() {
    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });
}
// Contact Form Submission
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Your message has been sent successfully!");

    form.reset();
});
