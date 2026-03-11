function QuickReplyButtons({ options, onSelect }) {
  if (!options || options.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-3 pl-9 message-enter">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option)}
          className="px-3.5 py-1.5 text-[13px] font-medium rounded-full
                     transition-all duration-200 active:scale-95 cursor-pointer"
          style={{
            color: '#db2777',
            background: 'transparent',
            border: '1px solid #5c3a50',
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#db277715';
            e.target.style.borderColor = '#db2777';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.borderColor = '#5c3a50';
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default QuickReplyButtons;
