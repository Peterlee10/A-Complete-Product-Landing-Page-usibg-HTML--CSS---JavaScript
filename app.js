// Real time price data (could come from an API in a real-world scenario.)
document.getElementById("price").innerText = "$89.99"; // Dynamic price update

// Real time customer reviews
const reviews = [
    { name: "Peter Ogundipe", review: "This product changed my life! Highly recommend." }, { name: "Jane Smith", review: "Very good quality and worth the price."}, { name: "Alice Johnson", review: "Comfortable and stylish. Love it!"}
];


const reviewList = document.getElementById("review-list");

reviews.forEach((review) => {
    const reviewItem = document.createElement("li");
    reviewItem.innerHTML = `<strong>${review.name}:</strong> ${review.review}`;
    reviewList.appendChild(reviewItem);
});

document.getElementById("myDropdown").addEventListener("mouseover", function() {
    this.open();
});