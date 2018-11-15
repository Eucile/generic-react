import React from 'react';
import PropTypes from 'prop-types';

function Comment(props) {
  return(
    <div>
      <style jsx>{`
        div {

        }
      `}</style>
      <h3>{props.names}</h3>
      <p>{props.commentTimeStamp}</p>
      <p><em>{props.comment}</em></p>
      <hr/>
    </div>
  );
}

Comment.propTypes = {
  names: PropTypes.string.isRequired,
  comment: PropTypes.string,
  commentTimeStamp: PropTypes.string.isRequired,
};

export default Comment;
