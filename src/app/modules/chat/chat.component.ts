import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  messages: any[] = [];
  userMessage: string = '';

  // Function to handle sending a message
  sendMessage() {
    if (this.userMessage.trim()) {
      // Add user's message to the messages array
      this.messages.push({
        text: this.userMessage,
        sender: 'user'
      });

      // Clear the input field
      this.userMessage = '';

      // Simulate bot response after a delay
      setTimeout(() => {
        this.botResponse();
      }, 1000);  // Simulate a 1-second delay for bot response
    }
  }

  // Simulated bot response logic
  botResponse() {
    const botMessage = 'I am a bot. How can I help you?';  // Simple static response

    this.messages.push({
      text: botMessage,
      sender: 'bot'
    });

    // Scroll to the bottom of the chat
    const chatMessages = document.getElementById('chatMessages');
    if (chatMessages) {
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }
}
