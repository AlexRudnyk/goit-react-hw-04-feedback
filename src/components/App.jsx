import React, { Component } from 'react';
import { Container } from './App.styled';
import Statistics from './statistics';
import FeedbackOptions from './feedbackOptions';
import Section from './section';
import Notification from './notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  makesVotesSum = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  makesPositiveFeedbackPercentage = () => {
    return (this.state.good / this.makesVotesSum()) * 100 || 0;
  };

  leaveFeedback = event => {
    const targetBtn = event.currentTarget.name;
    this.setState({
      [targetBtn]: this.state[targetBtn] + 1,
    });
  };

  render() {
    const options = Object.keys(this.state);
    const totalVotes = this.makesVotesSum();
    const positiveFeedbackPercentage = this.makesPositiveFeedbackPercentage();

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {totalVotes === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalVotes}
              positivePercentage={positiveFeedbackPercentage}
            />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
