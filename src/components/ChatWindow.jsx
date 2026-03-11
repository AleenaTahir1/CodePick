import { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import QuickReplyButtons from './QuickReplyButtons';
import logoSvg from '/logo.svg';

function ChatWindow({ messages, isTyping, onQuickReply }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const lastMessage = messages[messages.length - 1];
  const showQuickReplies =
    !isTyping &&
    lastMessage?.sender === 'bot' &&
    lastMessage?.quickReplies?.length > 0;

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-3.5 px-5 py-4 border-b flex-shrink-0"
           style={{ background: 'var(--bg-header)', borderColor: 'var(--border)' }}>
        <div className="relative flex-shrink-0">
          <img src={logoSvg} alt="CodePick" className="w-7 h-7 rounded-md"
               style={{ filter: 'drop-shadow(0 0 5px rgba(219, 39, 119, 0.3))' }} />
        </div>
        <div>
          <h1 className="text-[15px] font-semibold" style={{ color: '#f0e6f6' }}>
            CodePick
          </h1>
          <p className="text-[11px] font-medium" style={{ color: 'var(--text-secondary)' }}>
            Programming Language Advisor
          </p>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#34d399' }}></span>
          <span className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>Online</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 chat-scroll"
           style={{ background: 'var(--bg-page)' }}>
        {messages.map((msg) => (
          <MessageBubble key={msg.id} text={msg.text} sender={msg.sender} />
        ))}

        {showQuickReplies && (
          <QuickReplyButtons
            options={lastMessage.quickReplies}
            onSelect={onQuickReply}
          />
        )}

        {isTyping && (
          <div className="flex items-start mb-3 message-enter">
            <img src={logoSvg} alt="CodePick" className="flex-shrink-0 w-6 h-6 rounded mr-2 mt-0.5" />
            <div className="rounded-2xl rounded-tl-md px-4 py-3"
                 style={{ background: 'var(--bg-bot)', border: '1px solid var(--border)' }}>
              <div className="flex items-center gap-1.5">
                <span className="typing-dot w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#db2777' }}></span>
                <span className="typing-dot w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#db2777' }}></span>
                <span className="typing-dot w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#db2777' }}></span>
              </div>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}

export default ChatWindow;
