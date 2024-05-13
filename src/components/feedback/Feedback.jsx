import React, { useState } from 'react';
import styles from './feedback.module.css';
import Statistics from '../Statistics/StatisticsText';
import FeedbackButtons from '../FeedbackOptions/FeedbackOptions';
import NotificationMessage from '../NotificationMessage/NotificationMessage';

function Feedback() {
  const [feedbackState, setFeedbackState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });



    const updateCount = (option) => {
      setFeedbackState((prevState) => ({
        ...prevState,
        [option]: prevState[option] + 1
      }));
    };
  
    const { good, neutral, bad } = feedbackState;
    const totalFeedback = good + neutral + bad;
    const positivePercentage =
      totalFeedback > 0 ? ((good / totalFeedback) * 100).toFixed(2) : 0;

  return (
    <div className={styles.feedbackContainer}>
      <h1 className={styles.feedbackHeader}>Topa's React APP Feedback</h1>
      <h2 className={styles.feedbackHeader}>Please leave your feedback</h2>

      <FeedbackButtons onLeaveFeedback={updateCount} />

      {totalFeedback === 0 ? (
        <NotificationMessage />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      )}
    </div>
  );
}

export default Feedback;
