import React from 'react';

export const StepInput = (props) => {
  return (
    <div>
      <span>{props.step}:</span>
      <input
        className="step step-text"
        id={`${props.step}-steps`}
        type="text" placeholder="Step"
        onChange={props.handleChange}
        onKeyDown={props.handleKeyPress}
      />
    </div>
  );
};

StepInput.propTypes = {
  step: React.PropTypes.number,
  handleChange: React.PropTypes.func,
  handleKeyPress: React.PropTypes.func,
};
