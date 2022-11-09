import React from 'react';
import PropTypes from 'prop-types';
import { BtnContainer, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <BtnContainer>
        {options.map(option => (
          <Button
            type="button"
            key={option}
            onClick={onLeaveFeedback}
            name={option}
          >
            {option}
          </Button>
        ))}
      </BtnContainer>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
