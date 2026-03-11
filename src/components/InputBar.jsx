import { useState } from 'react';

function InputBar({ onSend, disabled }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setText('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 px-4 py-3"
      style={{ background: 'var(--bg-container)', borderTop: '1px solid var(--border)' }}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={disabled ? 'CodePick is thinking...' : 'Type your message...'}
        disabled={disabled}
        className="flex-1 px-4 py-2.5 text-sm rounded-xl outline-none transition-all
                   disabled:opacity-40 disabled:cursor-not-allowed"
        style={{
          background: 'var(--bg-input)',
          color: 'var(--text-primary)',
          border: '1px solid var(--border)',
        }}
        onFocus={(e) => e.target.style.borderColor = '#db2777'}
        onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
      />
      <button
        type="submit"
        disabled={disabled || !text.trim()}
        className="flex items-center justify-center w-10 h-10 rounded-xl
                   disabled:opacity-20 disabled:cursor-not-allowed
                   transition-all duration-200 active:scale-95"
        style={{ background: 'linear-gradient(135deg, #a3004c, #db2777)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
          <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
        </svg>
      </button>
    </form>
  );
}

export default InputBar;
