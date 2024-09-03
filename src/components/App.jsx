import Description from "./Description/Description.jsx";
import Options from "./Options/Options.jsx";
import Feedback from "./Feedback/Feedback.jsx";
import Notification from "./Notification/Notification.jsx";
import './App.css';

import {useState, useEffect} from 'react';

import feedbackOptions from "../options.json"
import positiveFeedbackOptions from "../positiveOptions.json"

const statsStorageKey = "saved-stats"

function App() {
    const [stats, setStats] = useState(
        () => {
            const savedStats = window.localStorage.getItem(statsStorageKey);

            if (savedStats) {
                return JSON.parse(savedStats);
            }

            return feedbackOptions.reduce((acc, option) => ({...acc, [option]: 0}), {});
        }
    );

    useEffect(() => {
        window.localStorage.setItem(statsStorageKey, JSON.stringify(stats));
    }, [stats]);

    const updateFeedback = (feedbackType) => {
        setStats((prevStats) => ({
            ...prevStats,
            [feedbackType]: prevStats[feedbackType] + 1,
        }));
    };

    const totalFeedback = Object.values(stats).reduce((acc, count) => acc + count, 0);

    return (
        <>
            <Description/>
            <Options options={Object.keys(stats)} updateFeedback={updateFeedback}/>
            {totalFeedback > 0 ? (
                <Feedback stats={stats} totalFeedback={totalFeedback} positiveFeedback={positiveFeedbackOptions}/>
            ) : (
                <Notification message="No feedback yet"/>
            )}
        </>
    );
}

export default App;
