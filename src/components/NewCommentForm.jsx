import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';

function NewCommentForm(props){
  let _names = null;
  let _comment = null;

  function handleNewCommentFormSubmission(event) {
    event.preventDefault();
    props.onNewCommentCreation({names: _names.value, comment: _comment.value, id: v4(), timeOpen: new Moment()});
    _names.value = '';
    _comment.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewCommentFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Poster name'
          ref={(input) => {_names = input;}}/>
        <textarea
          id='comment'
          placeholder='Add your comments...'
          ref={(textarea) => {_comment = textarea;}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

NewCommentForm.propTypes = {
  onNewCommentCreation: PropTypes.func
};

export default NewCommentForm;
