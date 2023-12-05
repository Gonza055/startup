// websocket.js
// Check for WebSocket support
if ("WebSocket" in window) {
    const ws = new WebSocket(`ws://${window.location.host}/ws`);

    ws.onopen = function() {
        console.log('Connected to the WebSocket server');
        ws.send('Hello Server!');
    };

    ws.onmessage = function(event) {
        console.log('Message from server:', event.data);
        const messagesElement = document.getElementById('messages');
        messagesElement.textContent += event.data + '\n'; // Append the message

        // If you want to update active users list
        const usersContainer = document.getElementById('usersContainer');
        // Assuming the server sends a stringified list of user names
        usersContainer.textContent = event.data; // Update the active users list
    };

    ws.onclose = function() {
        console.log('Disconnected from the WebSocket server');
    };

    ws.onerror = function(event) {
        console.error('WebSocket Error:', event);
    };

} else {
    alert("WebSocket NOT supported by your browser!");
}
