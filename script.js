document.addEventListener("DOMContentLoaded", function() {
    // Join For Free button interaction
    document.querySelector('.hero .btn').addEventListener('click', function() {
        alert('Welcome to eCademy! Please sign up to start learning.');
    });

    // Course "Start Now!" button interaction
    document.querySelectorAll('.course .start-now').forEach(function(button) {
        button.addEventListener('click', function() {
            alert('You are now being redirected to the course details.');
        });
    });

    // Dropdown menus
    const dropdownMenus = document.querySelectorAll('nav ul.menu > li');
    dropdownMenus.forEach(menu => {
        menu.addEventListener('mouseenter', function() {
            this.querySelector('.dropdown').style.display = 'block';
        });
        menu.addEventListener('mouseleave', function() {
            this.querySelector('.dropdown').style.display = 'none';
        });
    });
});
