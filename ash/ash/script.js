// script.js

// Function to open the modal and select art
function selectArt(imageSrc) {
    document.getElementById('selectedArt').src = imageSrc;
    document.getElementById('emailModal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('emailModal').style.display = 'none';
}

// Function to send an email (this is a mockup)
function sendEmail() {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const selectedArt = document.getElementById('selectedArt').src;

    alert(`Email sent to: ${email}\nMessage: ${message}\nArt: ${selectedArt}`);

    // Close the modal after sending email
    closeModal();
}
