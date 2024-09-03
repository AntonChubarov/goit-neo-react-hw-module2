import React from 'react';

const Options = ({ options, updateFeedback }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            {options.map((option) => (
                <button key={option} onClick={() => updateFeedback(option)}>
                    {option.toUpperCase()}
                </button>
            ))}
        </div>
    );
};

export default Options;
