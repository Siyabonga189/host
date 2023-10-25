// Example peer support chat messages
const supportMessages = [
    { user: 'Alice', text: 'Hello, is anyone here?' },
    { user: 'Bob', text: 'Hi Alice, I\'m here. How can I help you?' },
    { user: 'Alice', text: 'I\'m feeling stressed about an upcoming exam.' },
    { user: 'Carol', text: 'Don\'t worry, Alice. We\'re here to support you.' },
];

// Function to display peer support chat messages
function displaySupportMessages() {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = '';

    supportMessages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `
            <p>${message.user}:</p>
            <p>${message.text}</p>
        `;
        chatBox.appendChild(messageElement);
    });
}

// Display initial peer support chat messages
displaySupportMessages();
