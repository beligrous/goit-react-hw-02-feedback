import PropTypes from 'prop-types';
import Buttons from './Buttons';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <Buttons options={options} onLeaveFeedback={onLeaveFeedback} />
    </>
  );
}

export default FeedbackOptions;

Buttons.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
