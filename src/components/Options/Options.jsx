import React from 'react';

const Options = ({options, updateFeedback, totalFeedback, resetFeedback}) => {
    return (
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            {options.map((option) => (
                <button key={option} onClick={() => updateFeedback(option)}>
                    {option.toUpperCase()}
                </button>
            ))}
            {totalFeedback > 0 && (
                <button onClick={resetFeedback}>
                    RESET
                </button>
            )}
        </div>
    );
};

export default Options;
