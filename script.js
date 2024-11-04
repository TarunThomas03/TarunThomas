function openTab(tabName) {
    var i, tabcontent, tabbuttons;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";  
    }
    tabbuttons = document.getElementsByClassName("btn");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";  
    document.querySelector(`button[onclick="openTab('${tabName}')"]`).classList.add("active");
}

// Show the default tab on page load
document.addEventListener("DOMContentLoaded", function() {
    openTab('objective');
});
