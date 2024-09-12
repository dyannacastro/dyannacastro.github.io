// JavaScript to handle the loading screen
window.addEventListener('load', function () {
    var loading = document.getElementById('loading');
    var content = document.getElementById('content');

    // Add a fade-out effect to the loading screen
    loading.style.opacity = '0';
    setTimeout(function () {
        loading.style.display = 'none';
    }, 1000);
});