function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('click', function(event) {
    const menu = document.querySelector('.menu');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const isClickInside = menu.contains(event.target);

    if (!isClickInside) {
        dropdownMenu.style.display = 'none';
    }
});
