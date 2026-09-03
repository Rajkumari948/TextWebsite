// Measure the time before the page starts loading
const startTime = performance.now();

// Event listener for when the window is fully loaded
window.onload = function() {
    // Measure the time when the window has finished loading
    const loadTime = performance.now() - startTime;
    // Display the time it took to load in milliseconds
    const loadTimeParagraph = document.getElementById("loadTimeParagraph");
    loadTimeParagraph.textContent = "Page load time: " + loadTime + " milliseconds";
};