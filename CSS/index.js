<script>
// Greet user when page loads
window.onload = function() {
    alert("Welcome to Airbnb Clone!");
};

// Handle search icon click
document.querySelector('.search-box i.fa-search').addEventListener('click', function() {
    alert('Search functionality coming soon!');
});

// Make heart icons interactive
const hearts = document.querySelectorAll('.fa-heart');
hearts.forEach(heart => {
    heart.addEventListener('click', function() {
        this.style.color = this.style.color === 'red' ? 'rgb(49, 49, 49)' : 'red';
    });
});

// Hover effect on cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseover', function() {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseout', function() {
        card.style.transform = 'scale(1)';
    });
});
</script>
