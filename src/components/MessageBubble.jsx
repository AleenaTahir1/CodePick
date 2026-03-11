const logoSvg = `${import.meta.env.BASE_URL}logo.svg`;

function MessageBubble({ text, sender }) {
  const isBot = sender === 'bot';

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-3 message-enter`}>
      {isBot && (
        <img src={logoSvg} alt="CodePick" className="flex-shrink-0 w-6 h-6 rounded mr-2 mt-0.5" />
      )}

      <div
        className="max-w-[75%] px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap"
        style={
          isBot
            ? {
                background: 'var(--bg-bot)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border)',
                borderRadius: '16px 16px 16px 4px',
              }
            : {
                background: 'linear-gradient(135deg, #a3004c, #db2777)',
                color: '#fff',
                borderRadius: '16px 16px 4px 16px',
              }
        }
      >
        {text}
      </div>
    </div>
  );
}

export default MessageBubble;
