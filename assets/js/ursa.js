document.getElementById("toggle-arrow").addEventListener("click", function() {
    var content = document.getElementById("hidden-content");
    var dots = document.getElementById("dots");
    var arrow = document.getElementById("toggle-arrow");

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        dots.style.display = "none"; // Hide the "..."
        arrow.innerHTML = "&#x25B2;"; // Change to up arrow
    } else {
        content.style.display = "none";
        dots.style.display = "inline"; // Show the "..."
        arrow.innerHTML = "&#x25BC;"; // Change to down arrow
    }
});
