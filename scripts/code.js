const typingEffect = document.getElementById('typing-effect');
const labels = ["and I'm a Developer.", "an MCA Grad.","a Gamer.","~poweruser."]; // Add more labels if needed
let currentLabelIndex = 0;

function typeLabel() {
    const currentLabel = labels[currentLabelIndex];
    let charIndex = 0;
    const typingInterval = setInterval(() => {
        const labelText = currentLabel.slice(0, charIndex + 1);
        typingEffect.textContent = labelText;
        charIndex++;
        if (charIndex === currentLabel.length) {
            clearInterval(typingInterval);
            setTimeout(() => {
                eraseLabel();
            }, 2000); // Time to display the typed text before erasing
        }
    }, 100);
}

function eraseLabel() {
    let charIndex = labels[currentLabelIndex].length;
    const erasingInterval = setInterval(() => {
        const labelLength = labels[currentLabelIndex].length;
        const labelText = labels[currentLabelIndex].slice(0, charIndex - 1);
        typingEffect.textContent = labelText;
        charIndex--;
        if (charIndex === 0) {
            clearInterval(erasingInterval);
            currentLabelIndex = (currentLabelIndex + 1) % labels.length;
            setTimeout(() => {
                typeLabel();
            }, 500); // Time to wait before typing the next label
        }
    }, 50);
}

// Start the typing effect
typeLabel();
