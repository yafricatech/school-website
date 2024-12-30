document.addEventListener('DOMContentLoaded', () => {
    const scoreList = document.getElementById('scoreList');
    
    // Function to display scores
    function displayScores() {
        // Load scores from localStorage
        const scores = JSON.parse(localStorage.getItem('scores')) || [];
        
        // Check if there are any scores to display
        if (scores.length > 0) {
            scoreList.innerHTML = ''; // Clear the placeholder text
            scores.forEach((score) => {
                const scoreItem = document.createElement('p');
                scoreItem.textContent = `${score.name}: ${score.score}`;
                scoreList.appendChild(scoreItem);
            });
        } else {
            scoreList.innerHTML = '<p>No scores available yet.</p>';
        }
    }

    // Display scores when the page loads
    displayScores();

    // Listen for changes in localStorage and update the scores without refreshing the page
    window.addEventListener('storage', function(event) {
        if (event.key === 'scores') {
            displayScores();  // Update scores when 'scores' in localStorage changes
        }
    });
});
