document.getElementById('customNavbarToggler').addEventListener('click', function () {
    const navbarContent = document.getElementById('navbarSupportedContent');

    if (navbarContent.classList.contains('show')) {
        navbarContent.style.maxHeight = `${navbarContent.scrollHeight}px`; // Set height explicitly before collapsing
        setTimeout(() => {
            navbarContent.style.maxHeight = '0';
        }, 1);
    } else {
        navbarContent.style.maxHeight = '0';
        navbarContent.classList.add('show'); // Add the class to trigger transition
        setTimeout(() => {
            navbarContent.style.maxHeight = `${navbarContent.scrollHeight}px`;
        }, 1); // Allow CSS transition to calculate height
    }

    navbarContent.addEventListener('transitionend', () => {
        if (!navbarContent.style.maxHeight || navbarContent.style.maxHeight === '0px') {
            navbarContent.classList.remove('show');
        }
    }, { once: true });
});

document.getElementById('searchButton').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Work in Progress!');
});

document.getElementById('contactform').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting (default behavior)
    
    // Redirect to homepage after form submission
    window.location.href = 'index.html';});