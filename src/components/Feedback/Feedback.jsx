import React from 'react';

const Feedback = ({stats, totalFeedback, positivePercentage}) => {
    return (
        <div>
            {Object.entries(stats).map(([key, value]) => (
                <p key={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                </p>
            ))}
            <p>Total: {totalFeedback}</p>
            <p>Positive feedback percentage: {positivePercentage}%</p>
        </div>
    );
};

export default Feedback;
