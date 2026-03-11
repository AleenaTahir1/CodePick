import { useState, useCallback, useEffect } from 'react';
import ChatWindow from './components/ChatWindow';
import InputBar from './components/InputBar';

let messageId = 0;
const nextId = () => ++messageId;

const GREETING = {
  text:
    "Hi, I'm CodePick \u2014 your personal programming language advisor.\n\n" +
    "Answer a few quick questions and I'll recommend the best language for your project.\n\n" +
    "What do you want to build?",
  quickReplies: [
    "Website / Web App",
    "Mobile App",
    "Game",
    "Data Science / AI",
    "Automation / Scripting",
    "Embedded / IoT",
    "Desktop App",
    "API / Backend",
  ],
};

/**
 * Integration point for Aleena:
 * Replace the placeholder `getBotReply` with the real engine call:
 *   import { processMessage } from './engine/chatEngine';
 * Then in handleSend, call processMessage(userInput, currentState)
 * and use { botReply, newState, quickReplies } from the result.
 */

function App() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setIsTyping(true);
    const timer = setTimeout(() => {
      setMessages([
        {
          id: nextId(),
          text: GREETING.text,
          sender: 'bot',
          quickReplies: GREETING.quickReplies,
        },
      ]);
      setIsTyping(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const addBotReply = useCallback((text, quickReplies = []) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: nextId(), text, sender: 'bot', quickReplies },
      ]);
      setIsTyping(false);
    }, 500);
  }, []);

  const handleSend = useCallback(
    (text) => {
      setMessages((prev) => [
        ...prev,
        { id: nextId(), text, sender: 'user', quickReplies: [] },
      ]);

      addBotReply(
        "Thanks for your input! The rule engine isn't connected yet \u2014 " +
          "once Aleena integrates chatEngine.js, I'll give you a personalized " +
          "language recommendation right here.",
        GREETING.quickReplies,
      );
    },
    [addBotReply],
  );

  return (
    <div className="min-h-screen flex items-center justify-center p-4"
         style={{ background: 'linear-gradient(135deg, #1a1520, #221d27, #1a1520)' }}>
      <div className="w-full max-w-[600px] h-[90vh] max-h-[720px] overflow-hidden flex flex-col"
           style={{
             background: 'var(--bg-container)',
             borderRadius: '16px',
             border: '1px solid var(--border)',
             boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
           }}>
        <ChatWindow
          messages={messages}
          isTyping={isTyping}
          onQuickReply={handleSend}
        />
        <InputBar onSend={handleSend} disabled={isTyping} />
      </div>
    </div>
  );
}

export default App;
