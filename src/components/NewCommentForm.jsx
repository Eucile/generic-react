import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function NewCommentForm(props){
  var commentBox = {
    marginTop: '2em'
  }
  var commentStyles = {
    width: '100%',
    height: '150px'
  }

  var buttonStyles = {
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '35px',
    paddingRight: '35px'
  }
  let _names = null;
  let _comment = null;

  function handleNewCommentFormSubmission(event) {
    event.preventDefault();
    props.onNewCommentCreation({names: _names.value, comment: _comment.value, timeOpen: new Moment()});
    _names.value = '';
    _comment.value = '';
  }

  return (

    <div style={commentBox}>
      <style jsx>{`
      input {
        border-color:black;
        width: 100%;
        border-width: thin;
        border-color: black;
      }
      input:focus{
        outline: none;
        border-color: black;
      }
      textarea {
        border-color:black;
        width: 100%;
        border-width: thin;
        border-color: black;

      }
      textarea:focus{
        outline: none;
        border-color: black;
      }
      `}</style>
      <form onSubmit={handleNewCommentFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Username'
          ref={(input) => {_names = input;}}/>
        <textarea style={commentStyles}
          id='comment'
          placeholder='Add your comments...'
          ref={(textarea) => {_comment = textarea;}}/>
        <button style={buttonStyles} type='submit'>Submit</button>
      </form>
    </div>
  );
}

NewCommentForm.propTypes = {
  onNewCommentCreation: PropTypes.func
};

export default NewCommentForm;
