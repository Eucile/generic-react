import React from 'react';
import NewCommentForm from './NewCommentForm';
import PropTypes from 'prop-types';

function NewCommentControl(props) {
  return(
    <div>
      <NewCommentForm
        onNewCommentCreation={props.onNewCommentCreation}
      />
    </div>
  );
}

NewCommentForm.propTypes = {
  onNewCommentCreation: PropTypes.func
};

export default NewCommentControl;
