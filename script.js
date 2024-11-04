function openTab(tabName) {
    var i, tabcontent, tabbuttons;

    // Hide all tab contents
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.opacity = "0"; // Start fading out
        tabcontent[i].style.visibility = "hidden"; // Make invisible
    }

    // Remove "active" class from all buttons
    tabbuttons = document.getElementsByClassName("btn");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove("active");
    }

    // Show the selected tab after a short delay
    setTimeout(() => {
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("active");
        }

        const selectedTab = document.getElementById(tabName);
        selectedTab.classList.add("active");
        selectedTab.style.visibility = "visible"; // Make visible
        setTimeout(() => {
            selectedTab.style.opacity = "1"; // Fade in
        }, 10); // Small delay to allow for visibility change

        // Add "active" class to the corresponding button
        document.querySelector(`button[onclick="openTab('${tabName}')"]`).classList.add("active");
    }, 1000); // Wait for the fade-out to complete before showing the new tab
}

// Show the default tab on page load
document.addEventListener("DOMContentLoaded", function() {
    openTab('objective');
});
