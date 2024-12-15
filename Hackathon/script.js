// Omnitrix Animation Script
const omnitrix = document.getElementById('omnitrix');
const alienCards = document.querySelectorAll('.alien-card');

// Create message display element
const messageDisplay = document.createElement('div');
messageDisplay.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 15px 30px;
    background: #1a1a1a;
    border: 2px solid #00ff00;
    border-radius: 10px;
    color: #00ff00;
    font-family: 'Press Start 2P', sans-serif;
    text-align: center;
    z-index: 1000;
    display: none;
    box-shadow: 0 0 15px #00ff00;
`;
document.body.appendChild(messageDisplay);

// Function to show message
const showMessage = (message, duration = 3000) => {
    messageDisplay.textContent = message;
    messageDisplay.style.display = 'block';
    setTimeout(() => {
        messageDisplay.style.display = 'none';
    }, duration);
};

omnitrix.addEventListener('click', () => {
    showMessage('Omnitrix activated! Choose your alien!');
    omnitrix.style.animation = 'spin 1s infinite';
});

// Add click handlers to alien cards
alienCards.forEach(card => {
    card.addEventListener('click', () => {
        // Stop the spinning animation
        omnitrix.style.animation = 'none';
        // Show success message with the selected alien's name
        const alienName = card.querySelector('h3').textContent;
        showMessage(`Transformation complete! You have transformed into ${alienName}!`);
    });
});

// Adding Spin Animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}`, styleSheet.cssRules.length);
