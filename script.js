function openTab(tabName) {
    var tabcontent, i;

    // Hide all tab contents
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
        tabcontent[i].style.opacity = "0"; // Fade out
        tabcontent[i].style.display = "none"; // Make invisible
    }

    // Show the selected tab
    const selectedTab = document.getElementById(tabName);
    selectedTab.classList.add("active");
    selectedTab.style.display = "block"; // Show the selected tab

    // Wait for the next frame to trigger the transition
    setTimeout(() => {
        selectedTab.style.opacity = "1"; // Fade in
        selectedTab.style.transform = "translateY(0)"; // Reset position
    }, 10); // Small delay to allow for display change
}

// Show the default tab on page load
document.addEventListener("DOMContentLoaded", function() {
    openTab('objective');
});
