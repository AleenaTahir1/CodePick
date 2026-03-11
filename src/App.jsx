import { useState, useCallback, useEffect, useRef } from 'react';
import ChatWindow from './components/ChatWindow';
import InputBar from './components/InputBar';
import { processMessage, createInitialState } from './engine/chatEngine';
import { greeting } from './engine/responses';

let messageId = 0;
const nextId = () => ++messageId;

function App() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const stateRef = useRef(createInitialState());

  // Show greeting on mount
  useEffect(() => {
    setIsTyping(true);
    const timer = setTimeout(() => {
      setMessages([
        {
          id: nextId(),
          text: greeting.message,
          sender: 'bot',
          quickReplies: greeting.quickReplies,
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
      // Add user message
      setMessages((prev) => [
        ...prev,
        { id: nextId(), text, sender: 'user', quickReplies: [] },
      ]);

      // Process through chatEngine
      const { botReply, newState, quickReplies } = processMessage(
        text,
        stateRef.current
      );
      stateRef.current = newState;

      addBotReply(botReply, quickReplies);
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
