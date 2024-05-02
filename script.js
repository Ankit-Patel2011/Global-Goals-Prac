function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}



// Get elements
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');

// Toggle sidebar visibility
sidebarToggle.addEventListener('click', function() {
    sidebar.classList.toggle('show');
});
