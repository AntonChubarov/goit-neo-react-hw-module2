import React from 'react';

const Feedback = ({ stats, totalFeedback, positiveFeedback }) => {
    const positiveCount = Object.entries(stats)
        .filter(([key]) => positiveFeedback.includes(key))
        .reduce((acc, [, count]) => acc + count, 0);

    const positivePercentage = totalFeedback > 0 ? ((positiveCount / totalFeedback) * 100).toFixed(1) : 0;

    return (
        <div>
            {Object.entries(stats).map(([key, value]) => (
                <p key={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                </p>
            ))}
            <p>Total: {totalFeedback}</p>
            <p>Positive feedback: {positivePercentage}%</p>
        </div>
    );
};

export default Feedback;
