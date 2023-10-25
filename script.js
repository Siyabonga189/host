// Sample tutor data (replace this with actual data from your data source)
const tutorData = [
    { name: 'Siyabonga Sibiya', subject: 'Mathematics', location: 'Pretoria', rating: 5.0 },
    { name: 'Thando Mahlangu', subject: 'Physical Sciences', location: 'Kwamhlanga', rating: 4.9 },
    { name: 'Thabo Mazibuko', subject: 'Life Sciences', location: 'Kwamhlanga', rating: 4.9 },
];

// Function to display tutor profiles
function displayTutors() {
    const tutorsContainer = document.getElementById('tutors');

    // Clear existing tutor profiles
    tutorsContainer.innerHTML = '';

    // Loop through tutor data and create profiles
    tutorData.forEach(tutor => {
        const tutorProfile = document.createElement('div');
        tutorProfile.classList.add('tutor-profile');

        tutorProfile.innerHTML = `
            <h3>${tutor.name}</h3>
            <p>Subject: ${tutor.subject}</p>
            <p>Location: ${tutor.location}</p>
            <p>Rating: ${tutor.rating}</p>
            <button class="book-button" onclick="bookTutor('face-to-face')">Book for Face-to-Face</button>
            <button class="book-button" onclick="bookTutor('video-conference')">Book for Video Conference</button>
            <button class="book-button" onclick="bookTutor('online-chat')">Book for online chat</button>
        `;

        tutorsContainer.appendChild(tutorProfile);
    });
}

// Call the displayTutors function when the page loads
window.onload = displayTutors;
// Function to book a tutor
function bookTutor(tutorType) {
    // In a real application, you would handle the booking logic here
    if (tutorType === 'face-to-face') {
        alert('You have booked the tutor for face-to-face tutoring.');
    } else if (tutorType === 'video-conference') {
        alert('You have booked the tutor for video conference tutoring.');
    }
}

