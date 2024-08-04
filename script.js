document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const completionMessage = document.getElementById('completionMessage');
    const profilePicture = document.getElementById('profilePicture');
    const profilePreview = document.getElementById('profilePreview');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value.trim();
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const phoneNumber = document.getElementById('phoneNumber').value.trim();
        const address = document.getElementById('address').value.trim();
        
        if (!fullName || !username || !email || !phoneNumber || !address || !profilePicture.files.length) {
            alert('Please fill in all required fields and upload a profile picture.');
            return;
        }
        
        form.style.display = 'none';
        completionMessage.style.display = 'block';
    });

    profilePicture.addEventListener('change', () => {
        const file = profilePicture.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profilePreview.innerHTML = `<img src="${e.target.result}" alt="Profile Picture Preview">`;
            };
            reader.readAsDataURL(file);
        }
    });

    const particleCount = 50;
    const particlesContainer = document.querySelector('.particles');

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const sizeClass = Math.random() > 0.7 ? 'large' : Math.random() > 0.4 ? 'medium' : 'small';
        particle.classList.add(sizeClass);

        particle.style.left = `${Math.random() * 100}%`;
        particle.style.bottom = `${Math.random() * 100}vh`;

        particlesContainer.appendChild(particle);
    }
});
