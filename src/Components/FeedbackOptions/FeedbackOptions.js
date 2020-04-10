import React from 'react';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
             <div>
        
        {options.map(option => (
            <button
            name={option}
              key={option}
              type="button"
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          ))}
          </div>
    );
};

export default FeedbackOptions;