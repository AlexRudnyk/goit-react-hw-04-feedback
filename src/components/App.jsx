import { useState } from 'react';
import { Container } from './App.styled';
import Statistics from './statistics';
import FeedbackOptions from './feedbackOptions';
import Section from './section';
import Notification from './notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackName = { good, neutral, bad };
  const options = Object.keys(feedbackName);

  const makesVotesSum = () => {
    return good + neutral + bad;
  };

  const positiveFeedbackPercentage = () => {
    return (good / makesVotesSum()) * 100 || 0;
  };

  const leaveFeedback = event => {
    const targetBtn = event.currentTarget.name;

    switch (targetBtn) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={leaveFeedback} />
      </Section>
      <Section title="Statistics">
        {makesVotesSum() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={makesVotesSum()}
            positivePercentage={positiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Container>
  );
}

export default App;
