
import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView } from 'react-native';

export default function ChatbotScreen() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput('');

    const response = await fetch('http://localhost:5000/api/chatbot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });
    const data = await response.json();
    const botMessage = { sender: "bot", text: data.reply };
    setMessages([...messages, userMessage, botMessage]);
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <ScrollView>
        {messages.map((msg, index) => (
          <Text key={index} style={{ color: msg.sender === "bot" ? "blue" : "black" }}>
            {msg.sender}: {msg.text}
          </Text>
        ))}
      </ScrollView>
      <TextInput
        placeholder="Ask me anything..."
        value={input}
        onChangeText={setInput}
        style={{ borderWidth: 1, padding: 8, marginVertical: 10 }}
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
}
