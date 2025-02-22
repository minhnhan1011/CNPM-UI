import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");

  const sendMessage = async () => {
    if (userMessage.trim() === "") return;

    const newMessages = [...messages, { sender: "Bạn", text: userMessage }];
    setMessages(newMessages);
    setUserMessage("");

    const botReply = await fetchChatbotReply(userMessage);
    setMessages([...newMessages, { sender: "Chatbot", text: botReply }]);
  };

  const fetchChatbotReply = async (message) => {
    return "Xin chào! Tôi có thể giúp gì cho bạn?";
  };

  return (
    <div className="chatbot-window">
      {/* Header */}
      <div className="chatbot-header">
        <span>Chatbot</span>
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>
      </div>

      {/* Chat messages */}
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === "Bạn" ? "user-msg" : "bot-msg"}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="chatbot-input">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Nhập tin nhắn..."
        />
        <button onClick={sendMessage}>Gửi</button>
      </div>
    </div>
  );
};

export default Chatbot;
