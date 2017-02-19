import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const RemainingTodos = ({remaining}) => (
  <div>Remaining: {remaining}</div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    remaining:  state.todos.filter(t => t.isDone === false).length
  };
};


RemainingTodos.propTypes = {
  remaining: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(RemainingTodos);