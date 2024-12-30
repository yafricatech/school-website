document.addEventListener('DOMContentLoaded', () => {
    const scoreUploadForm = document.getElementById('scoreUploadForm');
    const studentNameInput = document.getElementById('studentName');
    const studentScoreInput = document.getElementById('studentScore');
    
    // Load existing scores from localStorage
    let scores = JSON.parse(localStorage.getItem('scores')) || [];

    // Handle form submission
    scoreUploadForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const studentName = studentNameInput.value;
        const studentScore = studentScoreInput.value;

        // Validate input
        if (studentName && studentScore) {
            const scoreData = { name: studentName, score: studentScore };
            scores.push(scoreData);
            
            // Save updated scores to localStorage
            localStorage.setItem('scores', JSON.stringify(scores));

            alert('Score uploaded successfully!');
            
            // Clear the form fields after submission
            studentNameInput.value = '';
            studentScoreInput.value = '';
        } else {
            alert('Please fill in all fields.');
        }
    });
});
